ClientEvents.lang('en_us',event => {
    global.client.GasToFluid.forEach(element => {
        event.add('gas.kubejs.'+element,id.charAt(0).toUpperCase() + id.slice(1)+" (gas)")
    });
})