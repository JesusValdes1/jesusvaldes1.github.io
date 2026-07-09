async function loadSection(section) {

    try {

        const response = await fetch(`sections/${APP.language}/${section}.html`);

        if (!response.ok) {
            throw new Error(`No se pudo cargar ${section}`);
        }

        const html = await response.text();
        document.getElementById(section).innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

async function loadSections() {
    await Promise.all(
        APP.sections.map(section => loadSection(section))
    );
}