const {
  MenuTemplate,
  MenuMiddleware,
  createBackMainMenuButtons,
} = require("telegraf-inline-menu");

const menu = new MenuTemplate(() => "Навигация по пунктам...👇");

const configMenu = new MenuTemplate(() => {
  return {
    type: "photo",
    media:
      "https://www.loxone.com/enen/wp-content/uploads/sites/3/2021/01/Partner-Downloads.png",
  };
});

configMenu.url(
  "Приложения",
  "https://www.loxone.com/enen/kb-cat/visualisation/"
);
configMenu.url(
  "Loxone Config",
  "https://www.loxone.com/enen/kb-cat/loxone-config/"
);
configMenu.url(
  "Блоки",
  "https://www.loxone.com/enen/kb-cat/config-functionblock/"
);
configMenu.url(
  "Интеграция",
  "https://www.loxone.com/enen/kb-cat/integrations/"
);
configMenu.url(
  "Сервисы",
  "https://www.loxone.com/enen/kb-cat/online-services/"
);
configMenu.url("API", "https://www.loxone.com/enen/kb-cat/api/");
configMenu.url(
  "Тех.обслуж",
  "https://www.loxone.com/enen/kb-cat/maintenance-diagnostics/"
);

configMenu.manualRow(
  createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню")
);

menu.submenu("Конфигуратор", "cfgMenu", configMenu);

const equipMenu = new MenuTemplate(() => {
  return {
    type: "photo",
    media:
      "https://www.loxone.com/enen/wp-content/uploads/sites/3/2021/01/EN_PH-Blog-Update-App-Audioserver-012021@2x-1.png",
  };
});

equipMenu.url("Кабельные соед.", "https://www.loxone.com/enen/kb-cat/cabling/");
equipMenu.url("Климат", "https://www.loxone.com/enen/kb-cat/climate/");
equipMenu.url(
  "Устройства Loxone",
  "https://www.loxone.com/enen/kb-cat/config-device/"
);
equipMenu.url("Расширения", "https://www.loxone.com/enen/kb-cat/extensions/");
equipMenu.url("Loxone Air", "https://www.loxone.com/enen/kb-cat/loxone-air/");
equipMenu.url("Освещение", "https://www.loxone.com/enen/kb-cat/lighting/");
equipMenu.url("Loxone tree", "https://www.loxone.com/enen/kb-cat/loxone-tree/");
equipMenu.url("Минисервер", "https://www.loxone.com/enen/kb-cat/miniserver/");
equipMenu.url("Мультимедиа", "https://www.loxone.com/enen/kb-cat/multimeda/");

equipMenu.manualRow(
  createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню")
);

menu.submenu("Оборудование", "eMenu", equipMenu);

const tutorialMenu = new MenuTemplate(() => {
  return {
    type: "photo",
    media:
      "https://www.loxone.com/enen/wp-content/uploads/sites/3/2021/01/EN_PH-Blog-Update-App-Audioserver-012021@2x-1.png",
  };
});

tutorialMenu.url(
  "Видеоуроки: Fundation",
  "https://www.loxone.com/enen/kb-cat/focus-series/"
);
tutorialMenu.url(
  "Видеоуроки: Focus",
  "https://www.loxone.com/enen/kb-cat/focus-series/"
);
tutorialMenu.url(
  "Видеоуроки: Configuration",
  "https://www.loxone.com/enen/kb-cat/config-device/"
);

tutorialMenu.manualRow(
  createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню")
);

menu.submenu("Уроки", "tMenu", tutorialMenu);

const howtoMenu = new MenuTemplate(() => {
  return {
    type: "photo",
    media:
      "https://www.loxone.com/enen/wp-content/uploads/sites/3/2021/01/EN_PH-Blog-Update-App-Audioserver-012021@2x-1.png",
  };
});

howtoMenu.url("Примеры", "https://www.loxone.com/enen/kb-cat/use-cases/");
howtoMenu.url("Файл config", "https://www.loxone.com/enen/kb-cat/use-cases/");

howtoMenu.manualRow(
  createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню")
);

menu.submenu("Решения", "htMenu", howtoMenu);

const menuMiddleware = new MenuMiddleware("/", menu);

module.exports = menuMiddleware;
