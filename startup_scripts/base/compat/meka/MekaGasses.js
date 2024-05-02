let $EventBuses,
  $GasDeferredRegister,
  $GasAttributes,
  $Fuel,
  $FloatingLong,
  GASES;

if (global.mods.mekanism) {
  $EventBuses = Java.loadClass("dev.architectury.platform.forge.EventBuses");
  $GasDeferredRegister = Java.loadClass(
    "mekanism.common.registration.impl.GasDeferredRegister"
  );
  $GasAttributes = Java.loadClass(
    "mekanism.api.chemical.gas.attribute.GasAttributes"
  );
  $Fuel = $GasAttributes.Fuel;
  $FloatingLong = Java.loadClass("mekanism.api.math.FloatingLong");

  GASES = new $GasDeferredRegister("kubejs");

  /**
   *
   * @param {string} gas_id if burn_rate and density are null , return a fuel-less gas
   * @param {hex_color} color example 0xFFFFFF
   * @param {int} burn_rate optional return 1
   * @param {int} density optional return 1
   */
  global.startup.createGas = function createGas(gas_id, color, burn_rate, density) {
    switch (undefined) {
      case typeof burn_rate:
        burn_rate = 1;
      case typeof density:
        density = 1;
      case typeof burn_rate && typeof density:
        GASES.register(gas_id, color);
        break;
      case typeof burn_rate || typeof density:
        GASES.register(
          gas_id,
          color,
          new $Fuel(
            () => burn_rate,
            () => $FloatingLong.create(density)
          )
        );
        break;
    }
    global.client.GasToFluid.push(id)
  }

  GASES.register($EventBuses.getModEventBus("kubejs").get());
}
