class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <div class="p-5 mb-4 rounded-3 header-jumbotron">
                <div class="container-fluid py-5 text-center">
                    <i class="fa-solid fa-virus fa-5x mb-3 icon-spin"></i>
                    <h1 class="display-5 fw-bold">Covid-19 Cases</h1>
                    <p class="fs-4">Data Source from <a href="https://github.com/mathdroid/covid-19-api">Mathdroid</a></p>
                </div>
            </div>`
    }
}

customElements.define('app-bar', AppBar);