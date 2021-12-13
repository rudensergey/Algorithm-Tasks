/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  const args = func.toString().match(/\((.+)\)/);

  if (!args) return () => func();

  const reqDeps = args[1].replace(/ /g, "").split(",");

  return () =>
    reqDeps.length
      ? func.apply(
          null,
          reqDeps.map((reqDep) => this.dependency[reqDep])
        )
      : func();
};
