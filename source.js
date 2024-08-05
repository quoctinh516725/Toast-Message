function successFunction() {
  myfunction(
    "success",
    "Success",
    "Bạn đã đăng nhập thành công. Xin chúc mừng!"
  );
}
function errorFunction() {
  myfunction(
    "error",
    "Error",
    "Rất tiếc bạn đã đăng nhập thất bại. Vui lòng thử lại!"
  );
}
function ClickToDelete() {
  const toast = document.querySelector(".toast");
  if (toast) {
    setTimeout(function () {
      toast.remove();
    },0);
  }
}
function myfunction(type = "", title = "", message = "", duration = 2000) {
  const toast = document.getElementById("toast");
  if (toast) {
    const toastItem = document.createElement("div");
    toastItem.classList.add("toast", `toast--${type}`);
    const delay = duration / 1000;
    toastItem.style.animation = `slideIn .5s ease,slideOut 1s ${delay}s ease forwards`;
    // Autoremove element
    setTimeout(function () {
      toastItem.remove();
    }, duration + 800);
    const icons = {
      success: "fa-solid fa-check",
      error: "fa-solid fa-x",
    };
    const icon = icons[type];
    toastItem.innerHTML = `
    <div class="toast__icon">
        <i class="${icon}"></i>
    </div>
    <div class="toast__infor">
      <div class="toast__title">${title}</div>
      <div class="toast__message">
        ${message}
      </div>
    </div>
    <div class="toast__delete" onclick="ClickToDelete()"><i class="fa-solid fa-x"></i></div>`;
    toast.append(toastItem);
  }
}
