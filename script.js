const pgformat = [{
    size: "lg",
    width: 11.7,
    height: 16.5
}, {
    size: "md",
    width: 8.3,
    height: 11.7
}, {
    size: "sm",
    width: 5.8,
    height: 8.3
}];

let imgwidth = 3510;
let imgheight = 4950;
let pgwidth = 11.7;
let pgheight = 16.5;

const selectFormat = () => {
    const format = document.getElementById("pageformat").value;
    const page = pgformat.filter(item => item.size === format);
    pgwidth = page[0].width;
    pgheight = page[0].height;
    const pagesize = document.getElementById("pagesize");
    pagesize.textContent = `( ${pgwidth} x ${pgheight} Inch )`;
}

const getFormat = () => {
    const format = document.getElementById("pageformat").value;
    const page = pgformat.filter(item => item.size === format);
    pgwidth = page[0].width;
    pgheight = page[0].height;
    const inch = document.getElementById("inch");
    inch.textContent = `${pgwidth} (${pgheight}) Inch`;
};

const getDPI = (event) => {
    event.preventDefault();
    getFormat();

    const pixel = document.getElementById("pixel");
    const output = document.getElementById("output");
    imgwidth = document.getElementById("width").value;
    imgheight = document.getElementById("height").value;

    imgwidth > 0 ? imgwidth : imgwidth = Math.floor(imgheight/1.41);
    pixel.textContent = `${imgwidth > 0 ? imgwidth : 0} (${imgheight > 0 ? imgheight : 0}) Pixel`;
    output.textContent = `${Math.round(imgwidth/pgwidth)} DPI`
}

document.getElementById("submit").addEventListener("click", getDPI);