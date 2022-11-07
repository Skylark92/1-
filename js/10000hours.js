// js file

/**
 * 입력을 받고 버튼을 누르면, (입력 안 하면 빠꾸, )
 * 1. 시간을 계산한다. !!
 * 2. 시계 뱅글뱅글 !!
 * 3. 결과창이 나오게 한다. !!
 * 4. 결과창에 값을 넣어준다. !!
 */

const 결과창 = document.querySelector(".result");

const 결과전문가 = document.querySelector("#rfor");
const 결과시간 = document.querySelector("#rhour");

const 버튼입력 = document.querySelector(".submit");

버튼입력.addEventListener("click", (event) => {
    const 입력전문가 = document.querySelector("#for").value;
    const 입력시간 = document.querySelector("#hour").value;
    const 로딩 = document.querySelector(".clock");

    if (!입력전문가 || !입력시간) {
        alert("입력해 천재야");
    } else if (입력시간 < 0 || 입력시간 > 24) {
        alert("죽을래?");
    } else {
        결과창.classList.remove("on");
        로딩.style.display = "block";
        setTimeout(() => {
            결과창.classList.add("on");
            로딩.style.display = "none";
        }, 2000);

        const 결과 = parseInt(10000 / +입력시간, 0);

        결과전문가.innerText = 입력전문가;
        결과시간.innerText = 결과;
    }
});

const 버튼공유 = document.querySelector(".btn-share");

const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("웅");
};

버튼공유.addEventListener("click", copy);
