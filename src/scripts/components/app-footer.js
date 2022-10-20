class AppFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="footer mt-5 py-3">
                <div class="container text-center">
                    <span class="text-white">Created by Grivia Trifosa Iskandar</span>
                </div>
            </footer>`
    }
}

customElements.define('app-footer', AppFooter);