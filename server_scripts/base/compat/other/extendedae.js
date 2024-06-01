/**
 * @template {number} int
 * @template {number} float
 * @template {#&item} itemtag
 * @template {string} item
 * @template {string} fluid
 */
if (global.startup.mods.extendedae2) {
  /**
   *
   * @param {string} type object type used from ae2 like "item" or "fluid"
   * @param {string} item
   * @returns {item}
   */
  global.server.Utils.compat.extendedae2.infinityDisk = (type, obj) => {
    switch (type) {
      case "item":
        type = "i";
        break;
      case "fluid":
        type = "f";
        break;
      default:
        console.log("WRONG TYPE ERROR , Contact owner of this script!");
    }
    return Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:' + type + '",id:' + obj + "}}"
    );
  };

  /**
   *
   * @param {string} modname
   * @param {string} type
   * @param {string} obj
   * @returns {item}
   */
  global.server.Utils.compat.extendedae2.customInfinityDisk = (
    modname,
    type,
    obj
  ) => {
    return Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"' + modname + ":" + type + '",id:' + obj + "}}"
    );
  };
}
