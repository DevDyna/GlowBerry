//priority 10
ItemEvents.tooltip(event => {
    /**
     * 
     * @param {item|item[]|#tag|#tag[]} id 
     * @param {string} desc 
     */
    global.client.tip = function tip(id, desc) {
        event.addAdvanced(id, (item, advanced, text) => {
            try {
                for (let i = 1; i < 10; i++) {
                    if (text.get(i) != null) {
                        if (!event.isShift()) {
                            text.add(i, '§8[§fLeft Shift§8]')
                            break
                        } else if (event.isShift()) {
                            text.add(i, Text.of(desc))
                            break
                        }
                    }
                }
            } catch (error) { }


        })
    }
})

if(global.client.DefaultTooltip){
    global.client.tip(global.disabledItem, "Item Disabled")
}