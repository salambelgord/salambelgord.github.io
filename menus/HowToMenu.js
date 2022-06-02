const menu = (MenuTemplate, createBackMainMenuButtons) => {
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
      return howtoMenu
}
module.exports = menu;