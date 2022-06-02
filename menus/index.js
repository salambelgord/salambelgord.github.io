const {
  MenuTemplate,
  MenuMiddleware,
  createBackMainMenuButtons,
} = require("telegraf-inline-menu");

const configMenu = require('./MenuConfig');
const equipMenu = require ('./MenuEquip');
const tutorialMenu = require ('./MenuTutorial');
const howtoMenu = require ('./HowToMenu');
const menu = new MenuTemplate(() => "Навигация по пунктам...👇");
menu.submenu("Конфигуратор", "cfgMenu", configMenu(MenuTemplate, createBackMainMenuButtons));
menu.submenu("Оборудование", "eMenu", equipMenu(MenuTemplate, createBackMainMenuButtons));
menu.submenu("Уроки", "tMenu", tutorialMenu(MenuTemplate, createBackMainMenuButtons));
menu.submenu("Решения", "htMenu", howtoMenu(MenuTemplate, createBackMainMenuButtons));

const menuMiddleware = new MenuMiddleware("/", menu);

module.exports = menuMiddleware;
