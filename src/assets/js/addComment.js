/* eslint-disable no-underscore-dangle */
import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
let commentBtns;

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const deleteComment = (commentId) => {
  const delItem = document.querySelector(`[data_id='${commentId}']`);
  commentList.removeChild(delItem.parentElement);
};

const handleDeleteBtnClick = async (event) => {
  const videoId = window.location.href.split("/videos/")[1];
  try {
    const response = await axios({
      url: `/api/${event.target.parentElement.id}/delete_comment`,
      method: "POST",
      data: {
        videoId,
      },
    });

    if (response.status === 200) {
      deleteComment(event.target.parentElement.id);
      decreaseNumber();
    }
  } catch (error) {
    console.log(error);
  }
};

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const comSpan = document.createElement("span");
  const delBtn = document.createElement("span");
  li.setAttribute("id", comment._id);
  delBtn.setAttribute("data_id", comment._id);
  delBtn.setAttribute("class", "video__comments-list__delete");
  delBtn.innerHTML = "❌";
  comSpan.innerHTML = comment.text;
  delBtn.addEventListener("click", handleDeleteBtnClick);
  li.appendChild(comSpan);
  li.appendChild(delBtn);
  commentList.prepend(li);
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(response.data);
    increaseNumber();
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  commentBtns = commentList.querySelectorAll(".video__comments-list__delete");
  commentBtns.forEach((btn) => {
    btn.addEventListener("click", handleDeleteBtnClick);
  });
}

if (addCommentForm) {
  init();
}
