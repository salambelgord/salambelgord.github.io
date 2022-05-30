require("dotenv").config();
const { Telegraf } = require("telegraf");
const { cnfg,welcome } = require("./options");

const bot = new Telegraf(process.env.BOT_TOKEN);

const {
  MenuTemplate,
  MenuMiddleware,
  createBackMainMenuButtons,
} = require("telegraf-inline-menu");



const menu = new MenuTemplate(() => welcome);

cnfg;
//menu.submenu("Конфигуратор", "cfgMenu", configMenu);
const equipMenu = new MenuTemplate(() => {
  return {
    type: "photo",
    media: "https://www.loxone.com/enen/wp-content/uploads/sites/3/2021/01/EN_PH-Blog-Update-App-Audioserver-012021@2x-1.png",
  };
});

equipMenu.url("Кабельные соед.", "https://www.loxone.com/enen/kb-cat/cabling/");
equipMenu.url("Климат", "https://www.loxone.com/enen/kb-cat/climate/");
equipMenu.url("Устройства Loxone", "https://www.loxone.com/enen/kb-cat/config-device/");
equipMenu.url("Расширения", "https://www.loxone.com/enen/kb-cat/extensions/");
equipMenu.url("Loxone Air", "https://www.loxone.com/enen/kb-cat/loxone-air/");
equipMenu.url("Освещение", "https://www.loxone.com/enen/kb-cat/lighting/");
equipMenu.url("Loxone tree", "https://www.loxone.com/enen/kb-cat/loxone-tree/");
equipMenu.url("Минисервер", "https://www.loxone.com/enen/kb-cat/miniserver/");
equipMenu.url("Мультимедиа", "https://www.loxone.com/enen/kb-cat/multimeda/");

equipMenu.manualRow(createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню"));

menu.submenu("Оборудование", "eMenu", equipMenu);

const tutorialMenu = new MenuTemplate(() => {
  return {
    type: "photo",
    media: "https://www.loxone.com/enen/wp-content/uploads/sites/3/2021/01/EN_PH-Blog-Update-App-Audioserver-012021@2x-1.png",
  };
});

tutorialMenu.url("Видеоуроки: Fundation", "https://www.loxone.com/enen/kb-cat/focus-series/");
tutorialMenu.url("Видеоуроки: Focus", "https://www.loxone.com/enen/kb-cat/focus-series/");
tutorialMenu.url("Видеоуроки: Configuration", "https://www.loxone.com/enen/kb-cat/config-device/");


tutorialMenu.manualRow(createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню"));

menu.submenu("Уроки", "tMenu", tutorialMenu);

const howtoMenu = new MenuTemplate(() => {
  return {
    type: "photo",
    media: "https://www.loxone.com/enen/wp-content/uploads/sites/3/2021/01/EN_PH-Blog-Update-App-Audioserver-012021@2x-1.png",
  };
});

howtoMenu.url("Примеры", "https://www.loxone.com/enen/kb-cat/use-cases/");
howtoMenu.url("Файл config", "https://www.loxone.com/enen/kb-cat/use-cases/");


howtoMenu.manualRow(createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню"));

menu.submenu("Решения", "htMenu", howtoMenu);


const menuMiddleware = new MenuMiddleware("/", menu);

bot.on("callback_query:data", async (ctx, next) => {
  console.log(
    "another callbackQuery happened",
    ctx.callbackQuery.data.length,
    ctx.callbackQuery.data
  );
  return next();
});

bot.command("start", async (ctx) => menuMiddleware.replyToContext(ctx));
bot.use(menuMiddleware.middleware());

bot.catch((error) => {
  console.log("bot error", error);
});

async function start() {
  try {
    await bot.launch();
  } catch (error) {
    console.log(error);
  }
}

start();
