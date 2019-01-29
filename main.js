module.exports = exports = function() {
  var slice = {
    leftRemaining: function(contents, split_str, case_sensitive) {
      if (typeof case_sensitive === "undefined") case_sensitive = false;
      if (typeof contents !== "undefined" && contents !== null && contents) {
        var parts = case_sensitive === false ? slice.split(contents, split_str) : contents.split(split_str);
        if (parts.length > 1) {
          var str = "";
          for (var i=0; i<=parts.length-2; i++) {
            str += parts[i];
            if (i < parts.length-2) {
                str += split_str;
            }
          }
          return str;
        }
      }
      return "";
    },
    rightRemaining(contents, split_str, case_sensitive) {
      if (typeof case_sensitive === "undefined") case_sensitive = false;
      if (typeof contents !== "undefined" && contents !== null && contents) {
        var parts = case_sensitive === false ? slice.split(contents, split_str) : contents.split(split_str);
        if (parts.length > 1) {
          var str = "";
          for (var i=1; i<=parts.length-1; i++) {
            str += parts[i];
            if (i < parts.length-1) {
              str += split_str;
            }
          }
          return str;
        }
      }
      return "";
    },
    leftSplit: function(contents, split_str, case_sensitive) {
      if (typeof case_sensitive === "undefined") case_sensitive = false;
      if (typeof contents !== "undefined" && contents !== null && contents) {
        var parts = case_sensitive === false ? slice.split(contents, split_str) : contents.split(split_str);
        return parts[0];
      }
      return '';
    },
    rightSplit: function(contents, split_str, case_sensitive) {
      if (typeof case_sensitive === "undefined") case_sensitive = false;
      if (typeof contents !== "undefined" && contents !== null && contents) {
        var parts = case_sensitive === false ? slice.split(contents, split_str) : contents.split(split_str);
        return parts[parts.length-1];
      }
      return "";
    },
    split: function(contents, split_str) {
      if (contents) {
        var small_contents = contents.toLowerCase();
        var small_split_str = split_str.toLowerCase();
        var new_contents = [];
        var index = 0;
        var count = 0;

        var parts = small_contents.split(small_split_str);
        for (var i=0; i<=parts.length-1; i++) {
          var part = parts[i];
          if (count > 0) index += split_str.length;
          new_contents.push(contents.substr(index, part.length));
          index += part.length;
          count += 1;
        }
        return new_contents;
      }
      return [];
    }
  };
  return slice;
};