"use strict";
async function fetchCourse() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    showCourse(data);
}
fetchCourse();
function showCourse(course) {
    var color, html;
    course.forEach(course => {
        if (course.nivel === 'iniciante') {
            color = "#67a7d7";
        }
        else {
            color = "#ff4e4e";
        }
        html =
            `
            <h1 style="background: ${color}">${course.nome} | ${course.aulas} aulas - ${course.horas}h</h1>
            <p>${course.tags.join(', ')}</p>
            <p>${course.idAulas.join('| ')}</p>
            <p>${course.gratuito ? 'gratuito' : 'pago'}</p>
        `;
        document.body.innerHTML += html;
    });
}
