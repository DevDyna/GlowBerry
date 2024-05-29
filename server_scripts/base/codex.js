//priority 999

/**
 * @template {number} int
 * @template {#&item} itemtag
 * @template {string} item
 * @template {string} fluid
 */

/* //RegExp to replace :
function RegN(string) {
return string.replace(/:/g, '_')
} */
//cut all over the wall and return (wall = char not int)
// function wall(string, wall) {
//     let part = string.split(wall)
//         return part[0]
// }
// //cut all before index (index = int not chat)
// function cut(string, index) {
//     return string.substring(index);
// }
//check if value is a tag or item and return as json
function ItemOrTag(value) {
  if (value.charAt(0) == "#") {
    return {
      tag: cut(value, 1),
    };
  } else {
    return JsonMakeItem(value);
  }
}
//check if value is a tag or item and return as json + count value
function ItemOrTagAndCount(value, count) {
  if (count < 2) {
    return ItemOrTag(value);
  } else if (value.charAt(0) === "#") {
    return {
      tag: cut(value, 1),
      count: count,
    };
  } else {
    return ItemAndCount(value, count);
  }
}
//return as json + count value
function ItemAndCount(value, count) {
  if (count < 2) {
    return JsonMakeItem(value);
  } else
    return {
      item: value,
      count: count,
    };
}
//return as json + count value
function FluidAndCount(value, count) {
  if (count < 2) {
    return JsonMakeFluid(value);
  } else
    return {
      fluid: value,
      amount: count,
    };
}
//json creator
function JsonMakeItem(value) {
  return {
    item: value,
  };
}
//json creator
function JsonMakeFluid(value) {
  return {
    fluid: value,
  };
}
//cut all except the string between the walls and return
// function doublewall(string, start, end) {
//     try {
//         return string.substring(string.indexOf(start) + start.length, string.indexOf(end, string.indexOf(start)))
//     } catch (error) {
//         return null
//     }
// }
//RND better
/*function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}*/
//RND bool
/*function rnd_bool() {
    if (Math.floor(Math.random() * 2) == 1)
        return true
        return false
}*/
//forEach better
function Feach(toFind, group) {
  let found = false;
  group.forEach((id) => {
    if (toFind === id) {
      found = true;
    }
  });
  return found;
}
//notification easy
function ENotify(
  event,
  text,
  itemIcon,
  outlineColor,
  backgroundColor,
  borderColor
) {
  event.player.notify(
    Notification.make((e) => {
      e.text = text;
      e.itemIcon = itemIcon;
      e.outlineColor = outlineColor;
      e.backgroundColor = backgroundColor;
      e.borderColor = borderColor;
    })
  );
}
//----------------------TAG-TOOLS-------------------------//
//remove the tags from any of items
// function NoTag(event, list) {
//     for (let i = 0; i < list.length; i++) {
//         event.removeAll(list[i])
//     }
// }
//add all tag items on a variable
// function TagPush(event, base, variable) {
//     console.log(variable)
//     event.get(base).getObjectIds().forEach(pot => {
//         variable.push(pot)
//     })
//     return variable
// }
//remove a tag based on another tag
// function TagRemoveTag(event, base, toRemove) {
//     event.get(base).getObjectIds().forEach(pot => {
//         event.remove(toRemove, pot)
//     })
// }
//-------------------------------------------------------//
/*function roll_time(chance) { // more = common | less = rare
    let count = 0;
    for (let i = 0; i < chance; i++) {
        if (rnd_bool()) {
            count++
        }
    }
    return count
}*/

function RegX(string, replace) {
  if (typeof optionalValue != "undefined") {
    //if replace still defined
    return string.replace(/[^a-zA-Z0-9_ ]/g, replace);
  } else {
    return string.replace(/[^a-zA-Z0-9_ ]/g, "");
  }
}
//rnd bool again
function rnd_booldozer(min, max) {
  if (rnd(min, max) == max) {
    return true;
  } else {
    return false;
  }
}

function IdGenerator(string) {
  if (global.server.EasyId) {
    const words = str.match(/\b\w/g);
    return words.join("");
  } else {
    return string.replace(/^[a-zA-Z0-9]+$/, "_");
  }
}
