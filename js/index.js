// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".photos__item img");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    //   captionText.innerHTML = this.alt;
    modalImg.dataset.prevImgId = this.id;
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

/*------------------------------------------*/
/*------------------------------------------*/
// Modal Images Changing

let images = Array.from(document.querySelectorAll(".photos__item img"));
let imagesSrc = [];

for (let i = 0; i < images.length; i++) {
  images[i].setAttribute("id", "img-" + i);

  imagesSrc[i] = images[i].src;
}

const nextImg = () => {
  let newIndex = Number(modalImg.dataset.prevImgId.split("-")[1]) + 1;

  if (newIndex >= 50) newIndex = 0;
  modalImg.src = imagesSrc[newIndex];

  modalImg.dataset.prevImgId = images[newIndex].id;
};

const prevImg = () => {
  let newIndex = Number(modalImg.dataset.prevImgId.split("-")[1]) - 1;

  console.log(newIndex);

  if (newIndex < 0) newIndex = 49;
  modalImg.src = imagesSrc[newIndex];

  modalImg.dataset.prevImgId = images[newIndex].id;
};

document
  .querySelector(".modal__control__right")
  .addEventListener("click", () => {
    nextImg();
  });

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 39) {
    nextImg();
  } else if (e.keyCode === 37) {
    prevImg();
  }
});

document
  .querySelector(".modal__control__right")
  .addEventListener("click", () => {
    nextImg();
  });

document
  .querySelector(".modal__control__left")
  .addEventListener("click", () => {
    prevImg();
  });

/*------------------------------------------*/
/*------------------------------------------*/
// Have done for toggling images
// function setCharAt(str, index, chr) {
//   if (index > str.length - 1) return str;

//   if (chr < 11) {
//     return str.substring(0, index) + chr + str.substring(index + 1);
//   } else {
//     return str.substring(0, index) + chr + str.substring(index + 2);
//   }
// }

// let curImgInd = 0;
// let newImg = 2;
// // Changing Image
// document
//   .querySelector(".modal__control__right")
//   .addEventListener("click", () => {
//     console.log("sdfsd");
//     let imgNo = img[curImgInd].src.substr(
//       img[curImgInd].src.lastIndexOf(".") - 1,
//       1
//     );

//     // console.log(img[curImgInd].src.lastIndexOf(".") - 1);

//     var re = new RegExp(imgNo, "");

//     let curImgNo = img[curImgInd].src.lastIndexOf(".") - 1;
//     if (newImg > 11) {
//       curImgNo--;
//       let imgNo = img[curImgInd].src.substr(
//         img[curImgInd].src.lastIndexOf(".") - 2,
//         2
//       );

//       if (Number(imgNo) !== 50) {
//         newImg++;
//       } else {
//         newImg = 2;
//       }
//     }

//     modalImg.src = setCharAt(modalImg.src, curImgNo, newImg);

//     curImgInd++;
//   });

// Here

// Left Control

// document
//   .querySelector(".modal__control__left")
//   .addEventListener("click", () => {
//     console.log("sdfsd");
//     let imgNo = img[curImgInd].src.substr(
//       img[curImgInd].src.lastIndexOf(".") - 1,
//       1
//     );

//     console.log(img[curImgInd].src.lastIndexOf(".") - 1);

//     var re = new RegExp(imgNo, "");
//     if (Number(imgNo) !== 0) {
//       newImg--;
//     } else {
//       newImg = 50;
//     }

//     let curImgNo = img[curImgInd].src.lastIndexOf(".") - 1;
//     if (newImg > 11) {
//       curImgNo--;
//     }

//     console.log(curImgNo);

//     modalImg.src = setCharAt(modalImg.src, curImgNo, newImg);
//     console.log(modalImg.src);

//     curImgInd++;
//   });
