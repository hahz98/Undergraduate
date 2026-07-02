// تغيير نوع الدراسة
function changeStudy() {

    let type = document.getElementById("studyType").value;

    let master = document.getElementById("masterSection");
    let phd = document.getElementById("phdSection");

    if (type === "master") {
        master.classList.remove("hidden");
        phd.classList.add("hidden");
    } else {
        master.classList.add("hidden");
        phd.classList.remove("hidden");
    }
}

// ===============================
// حساب الماجستير
// ===============================

function calculateMaster() {

    let student =
        parseFloat(document.getElementById("studentAverage").value);

    let first =
        parseFloat(document.getElementById("firstAverage").value);

    let exam =
        parseFloat(document.getElementById("masterExam").value);

    if (isNaN(student) || isNaN(first) || isNaN(exam)) {

        alert("يرجى إدخال جميع البيانات");

        return;

    }

    // المعدل النسبي
    let relative =
        ((student / 2) + ((student * 100) / first)) / 2;

    // معدل المفاضلة
    let competitive =
        (relative * 0.70) +
        (exam * 0.30);

    document.getElementById("masterRelative").innerHTML =
        relative;

    document.getElementById("masterResult").innerHTML =
        competitive;

}

// ===============================
// حساب الدكتوراه
// ===============================

function calculatePhD() {

    let masterAverage =
        parseFloat(document.getElementById("masterAverage").value);

    let exam =
        parseFloat(document.getElementById("phdExam").value);

    if (isNaN(masterAverage) || isNaN(exam)) {

        alert("يرجى إدخال جميع البيانات");

        return;

    }

    // 60% معدل الماجستير + 40% الامتحان التنافسي
    let result =
        (masterAverage * 0.60) +
        (exam * 0.40);

    document.getElementById("phdResult").innerHTML =
        result.toFixed(2);

}