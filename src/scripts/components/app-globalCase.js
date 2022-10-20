class GlobalCase extends HTMLElement {
    set caseGlobalConfirmed(caseGlobalConfirmed) {
        this._caseGlobalConfirmed = caseGlobalConfirmed;
        this.render();
    }

    set caseGlobalDeath(caseGlobalDeath) {
        this._caseGlobalDeath = caseGlobalDeath;
        this.render();
    }

    set caseGlobalRecovered(caseGlobalRecovered) {
        this._caseGlobalRecovered = caseGlobalRecovered;
        this.render();
    }

    set globalUpdateDate(globalUpdateDate) {
        this._globalUpdateDate = globalUpdateDate;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="text-center mt-5">
                <h4>Global Covid Data</h4>
                <h5>Latest Update: ${this._globalUpdateDate}</h5>
            </div>
            <div class="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-evenly align-items-center">
                <div class="card text-white text-center border-warning mb-3 p-2" style="max-width: 18rem">
                    <div class="card-body text-warning">
                        <h1 class="card-text">
                        ${this._caseGlobalConfirmed}
                        </h1>
                        <h6 class="card-title">Confirmed Global Covid Case</h6>
                    </div>
                </div>
                <div class="card text-white text-center border-danger mb-3 p-2" style="max-width: 18rem">
                    <div class="card-body text-danger">
                        <h1 class="card-text">
                        ${this._caseGlobalDeath}
                        </h1>
                        <h6 class="card-title">Death Global Covid Case</h6>
                    </div>
                </div>
                <div class="card text-white text-center border-success mb-3 p-2" style="max-width: 18rem">
                    <div class="card-body text-success">
                        <h1 class="card-text">
                        ${this._caseGlobalRecovered}
                        </h1>
                        <h6 class="card-title">Recovered Global Covid Case</h6>
                    </div>
                </div>
            </div>`
    } 
}

customElements.define('global-case', GlobalCase);