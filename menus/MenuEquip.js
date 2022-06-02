const menu = (MenuTemplate, createBackMainMenuButtons) => {
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
      
      
      return equipMenu;
}
module.exports = menu;
