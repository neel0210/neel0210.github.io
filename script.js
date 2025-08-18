document.addEventListener("DOMContentLoaded", () => {
  // ===== Downloads Popup =====
  const btnDownloads = document.querySelectorAll(".btn-download");
  const downloadPopup = document.getElementById("download-popup");
  const closeDownload = document.getElementById("close-popup");

  btnDownloads?.forEach(btn =>
    btn.addEventListener("click", e => {
      e.preventDefault();
      downloadPopup?.classList.add("active");
    })
  );

  closeDownload?.addEventListener("click", () => downloadPopup?.classList.remove("active"));
  downloadPopup?.addEventListener("click", e => { if(e.target === downloadPopup) downloadPopup.classList.remove("active"); });

  // ===== Back Button =====
  document.getElementById("back-btn")?.addEventListener("click", () => window.location.href = "index.html");

  // ===== MTK Devices (A22 + A24) =====
  [
    { cardId: "a22-card", popupId: "a22-popup", patchesBtnId: "patches-btn", patchesPopupId: "patches-popup" },
    { cardId: "a24-card", popupId: "a24-popup" }
  ].forEach(d => {
    const card = document.getElementById(d.cardId), popup = document.getElementById(d.popupId);
    if(!card || !popup) return;

    const exitBtn = popup.querySelector(".exit-btn");
    card.addEventListener("click", () => popup.classList.add("active"));
    exitBtn.addEventListener("click", () => popup.classList.remove("active"));
    popup.addEventListener("click", e => { if(e.target === popup) popup.classList.remove("active"); });

    if(d.patchesBtnId && d.patchesPopupId){
      const patchesBtn = document.getElementById(d.patchesBtnId),
            patchesPopup = document.getElementById(d.patchesPopupId),
            patchesExit = patchesPopup.querySelector(".exit-btn");

      patchesBtn.addEventListener("click", e => {
        e.preventDefault();
        popup.classList.remove("active");
        patchesPopup.classList.add("active");
      });

      patchesExit.addEventListener("click", () => {
        patchesPopup.classList.remove("active");
        popup.classList.add("active");
      });

      patchesPopup.addEventListener("click", e => {
        if(e.target === patchesPopup){
          patchesPopup.classList.remove("active");
          popup.classList.add("active");
        }
      });
    }
  });

  // ===== Exynos & SD Devices =====
  [
    { list: [
        { cardId: "exy7870-card", popupId: "exy7870-popup" },
        { cardId: "m30s-card", popupId: "m30s-popup" },
        { cardId: "a50-card", popupId: "a50-popup" }
      ]
    },
    { list: [
        { cardId: "realme6pro-card", popupId: "realme6pro-popup" },
        { cardId: "a52-card", popupId: "a52-popup" },
        { cardId: "a72-card", popupId: "a72-popup" },
        { cardId: "s22-card", popupId: "s22-popup" }
      ]
    }
  ].forEach(group => {
    group.list.forEach(d => {
      const card = document.getElementById(d.cardId), popup = document.getElementById(d.popupId);
      if(!card || !popup) return;
      const exitBtn = popup.querySelector(".exit-btn");

      card.addEventListener("click", () => popup.classList.add("active"));
      exitBtn.addEventListener("click", () => popup.classList.remove("active"));
      popup.addEventListener("click", e => { if(e.target === popup) popup.classList.remove("active"); });
    });
  });
});
