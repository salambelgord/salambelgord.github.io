const { MenuTemplate,createBackMainMenuButtons} = require("telegraf-inline-menu");

module.exports = {


  cnfg: ()=>{
   
    const configMenu = new MenuTemplate(() => {
      return {
        type: "photo",
        media: "https://www.loxone.com/enen/wp-content/uploads/sites/3/2021/01/Partner-Downloads.png",
      };
    });
    
    configMenu.url("Приложения", "https://www.loxone.com/enen/kb-cat/visualisation/");
    configMenu.url("Loxone Config", "https://www.loxone.com/enen/kb-cat/loxone-config/");
    configMenu.url("Блоки", "https://www.loxone.com/enen/kb-cat/config-functionblock/");
    configMenu.url("Интеграция", "https://www.loxone.com/enen/kb-cat/integrations/");
    configMenu.url("Сервисы", "https://www.loxone.com/enen/kb-cat/online-services/");
    configMenu.url("API", "https://www.loxone.com/enen/kb-cat/api/");
    configMenu.url("Тех.обслуж", "https://www.loxone.com/enen/kb-cat/maintenance-diagnostics/");
    
    configMenu.manualRow(createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню"));
    
   
   
  },
  welcome:"Навигация по пунктам...👇"

  
};
