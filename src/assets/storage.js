// 1

window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

window.IDBTransaction =
  window.IDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;

window.IDBKeyRange =
  window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
  console.log("IndexedDB could not be found in this browser.");
}

// 2
var db;
const request = indexedDB.open("CarsDatabase", 1);

request.onerror = function (event) {
  console.log("error" + event.target.result);
};

request.onsuccess = function (event) {
  db = request.result;
  console.log("success" + db);
};

request.onupgradeneeded = function (event) {
  var db = event.target.result;
  var objectStorage = db.createObjectStore("CarsDatabase");
};
