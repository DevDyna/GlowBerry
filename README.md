# GlowBerry
 Originally made for Ironberry Modpack

 KUBEJS script-base

 How to use:

## Startup Side
[`Direct link`](https://github.com/DevDyna/GlowBerry/blob/main/startup_scripts/HowToUse.js)

## Server Side
[`Direct link`](https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/HowToUse.js)

## Client Side
[`NotYetCompleted`]



## GitHub Side

### How to make a custom Schema                        

- Open [startup scripts](https://github.com/DevDyna/GlowBerry/blob/main/startup_scripts/base/global.js)
 
 - Add a new field on [global.startup.mods](https://github.com/DevDyna/GlowBerry/blob/main/startup_scripts/base/global.js#L4) based on **mod name** equal `Boolean`
 - Add a new field on [global.server.recipes.compat](https://github.com/DevDyna/GlowBerry/blob/main/startup_scripts/base/global.js#L25) based on **json type name** equal `Function`
 - Clone [line 94](https://github.com/DevDyna/GlowBerry/blob/main/startup_scripts/base/global.js#L94) removing slash comment and replace `modname` and `mod-id` based on previous **mod name**

- Clone .exampleSchema.js.disabled on [server scripts](https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/base/compat/schemas/.exampleSchema.js.disabled)

- Change `modname` with your **mod name** on [line 9](https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/base/compat/schemas/.exampleSchema.js.disabled#L9)

- Change `modname` with your **mod name** and `functionName` with your **json type name** on [line 11](https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/base/compat/schemas/.exampleSchema.js.disabled#L11)

- Insert all parameters inside the brackets on [line 11](https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/base/compat/schemas/.exampleSchema.js.disabled#L11)

- Insert your code on [line 13](https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/base/compat/schemas/.exampleSchema.js.disabled#L13)

- (Optional) If you are using VScode you can use **@param** to add a preview of what was the input parameters [example](https://github.com/DevDyna/GlowBerry/blob/main/server_scripts/base/compat/schemas/ae2.js#L10)

- To add multiple **json types** you can repeat same process as before
  **note: if modname still same isn't need to recreate!**
 
### Do you want contribute? Send it as pull request on GITHUB!