StartupEvents.registry("fluid", (event) => {
  global.startup.GasToFluid = function GasToFluid(
    id,
    color,
    burn_rate,
    density
  ) {
    switch (undefined) {
      case typeof burn_rate:
        burn_rate = 1;
      case typeof density:
        density = 1;
      case typeof burn_rate && typeof density:
        GASES.register(id, color);
        break;
      case typeof burn_rate || typeof density:
        GASES.register(
          id,
          color,
          new $Fuel(
            () => burn_rate,
            () => $FloatingLong.create(density)
          )
        );
        break;
    }
    event
      .create(id)
      .thickTexture(color)
      .bucketColor(color)
      .displayName(id.charAt(0).toUpperCase() + id.slice(1) + " (fluid)");
  };
});
