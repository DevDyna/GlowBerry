ServerEvents.recipes(event => {
    //Dynamic Tag Remover//
    event.remove({
        output: [
            '#glowberry:output',
            '#glowberry:any',
            '#glowberry:disabled',
        ]
    })

    event.remove({
        input: [
            '#glowberry:input',
            '#glowberry:any',
            '#glowberry:disabled',
        ]
    })
})

