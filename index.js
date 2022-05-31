const { Telegraf } = require("telegraf");
const { telegram } = require("./config/options");

const menuMiddleware = require("./menus");

const bot = new Telegraf(telegram.token);

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
