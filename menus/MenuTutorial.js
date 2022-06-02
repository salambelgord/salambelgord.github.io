const menu = (MenuTemplate, createBackMainMenuButtons) => {
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
    return tutorialMenu
}
module.exports = menu;