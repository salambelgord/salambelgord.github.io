const menu = (MenuTemplate, createBackMainMenuButtons) => {
    let qbQuery = "preview";
    const fileMenu = new MenuTemplate(() => {
      if (qbQuery === "1") {
        return {
            type: 'document',
			media: 'https://telegram.org/file/464001088/1/bI7AJLo7oX4.287931.zip/374fe3b0a59dc60005',
			text: 'Just a caption for a <b>document</b>',
			parse_mode: 'HTML'
        };
      }
    
      if (qbQuery === "4") {
        return {
            type: 'document',
			media: 'https://telegram.org/file/464001088/1/bI7AJLo7oX4.287931.zip/374fe3b0a59dc60005',
			text: 'Just a caption for a <b>document</b>',
			parse_mode: 'HTML'
        };
      }
    
      if (qbQuery === "5") {
        return {
            type: 'document',
			media: 'https://telegram.org/file/464001088/1/bI7AJLo7oX4.287931.zip/374fe3b0a59dc60005',
			text: 'Just a caption for a <b>document</b>',
			parse_mode: 'HTML'
        };
      }
    
      if (qbQuery === "6") {
        return {
            type: 'document',
			media: 'https://telegram.org/file/464001088/1/bI7AJLo7oX4.287931.zip/374fe3b0a59dc60005',
			text: 'Just a caption for a <b>document</b>',
			parse_mode: 'HTML'
        };
      }
    
      if (qbQuery === "7") {
        return {
            type: 'document',
			media: 'https://telegram.org/file/464001088/1/bI7AJLo7oX4.287931.zip/374fe3b0a59dc60005',
			text: 'Just a caption for a <b>document</b>',
			parse_mode: 'HTML'
        };
      }
    
      if (qbQuery === "8") {
        return {
            type: 'document',
			media: 'https://telegram.org/file/464001088/1/bI7AJLo7oX4.287931.zip/374fe3b0a59dc60005',
			text: 'Just a caption for a <b>document</b>',
			parse_mode: 'HTML'
        };
      }
    
      if (qbQuery === "preview") {
        return {
          text: "<b>1.</b>Config file media -001\n<b>2.</b>Config file media -002\n<b>3.</b>Config file media -003\n<b>4.</b>Config file media -004\n",
          parse_mode: "HTML",
        };
      }
    
      return {
        type: 'document',
        media: 'https://telegram.org/file/464001088/1/bI7AJLo7oX4.287931.zip/374fe3b0a59dc60005',
        text: 'Just a caption for a <b>document</b>',
        parse_mode: 'HTML'
      };
    });
    
    fileMenu.interact("Подсказка", "qButton", {
      do: async (ctx) => {
        await ctx.answerCbQuery( "Чтобы получить файл нажми на кнопку нужного файла." );
        return false;
      },
    });
    
    fileMenu.select(
      "type",
      [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
      ],
      {
        columns: 2,
        isSet: (_, key) => qbQuery === key,
        set: (_, key) => {
          qbQuery = key;
          return true;
        },
      }
    );
    fileMenu.manualRow(createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню"));
return fileMenu    

}
module.exports = menu;
/**    const sendFileMenu = new MenuTemplate(() => {
        return {
            type: 'document',
			media: 'https://telegram.org/file/464001088/1/bI7AJLo7oX4.287931.zip/374fe3b0a59dc60005',
			text: 'Just a caption for a <b>document</b>',
			parse_mode: 'HTML'
        }
    });
        sendFileMenu.manualRow( createBackMainMenuButtons("🔼 Предыдущее меню", "⏫ Основное меню"));
          return sendFileMenu */