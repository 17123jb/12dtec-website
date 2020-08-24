const t = document.getElementById("TARDROP");
const m = document.getElementById("MATDROP");
const o = document.getElementById("ORODROP");
const p = document.getElementById("PUKDROP");
const r = document.getElementById("REMDROP");
const x = document.getElementById("PUXDROP");

function tarDispDrop() {
  if (t.style.display === "none") {
    t.style.display = "block";
    m.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    r.style.display = "none";
    x.style.display = "none";
  } else {
    t.style.display = "none";
  }
}

function matDispDrop() {
  if (m.style.display === "none") {
    t.style.display = "none";
    m.style.display = "block";
    o.style.display = "none";
    p.style.display = "none";
    r.style.display = "none";
    x.style.display = "none";
  } else {
    m.style.display = "none";
  }
}

function oroDispDrop() {
  if (o.style.display === "none") {
    t.style.display = "none";
    m.style.display = "none";
    o.style.display = "block";
    p.style.display = "none";
    r.style.display = "none";
    x.style.display = "none";
  } else {
    o.style.display = "none";
  }
} 

function pukDispDrop() {
  if (p.style.display === "none") {
    t.style.display = "none";
    m.style.display = "none";
    o.style.display = "none";
    p.style.display = "block";
    r.style.display = "none";
    x.style.display = "none";
  } else {
    p.style.display = "none";
  }
}

function remDispDrop() {
  if (r.style.display === "none") {
    t.style.display = "none";
    m.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    r.style.display = "block";
    x.style.display = "none";
  } else {
    r.style.display = "none";
  }
} 

function puxDispDrop() {
  if (x.style.display === "none") {
    t.style.display = "none";
    m.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    r.style.display = "none";
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

