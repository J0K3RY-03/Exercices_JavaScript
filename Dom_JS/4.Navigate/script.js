const selectList = document.querySelector("ol");
const elemAfter = selectList.firstElementChild;
const childList = selectList.lastElementChild;
selectList.insertBefore(childList, elemAfter);

// section

const mainItem = document.querySelector("main");
const selectSectionTwoo = mainItem.children[1];
const titleElemSectionTwoo = selectSectionTwoo.firstElementChild;
const selectSectionThree = mainItem.children[2];
const divTitleSectionThree = selectSectionThree.firstElementChild;
const titleElemSectionThree = divTitleSectionThree.firstElementChild;

selectSectionTwoo.insertBefore(
  titleElemSectionThree,
  selectSectionTwoo.lastElementChild
);

divTitleSectionThree.insertBefore(
  titleElemSectionTwoo,
  divTitleSectionThree.lastElementChild
);

// suppression de l'élément du dom avec .remove()
selectSectionThree.remove();
