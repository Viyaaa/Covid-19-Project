class CountryCase extends HTMLElement {
    set caseCountryConfirmed(caseCountryConfirmed) {
        this._caseCountryConfirmed = caseCountryConfirmed;
        this.render();
    }

    set caseCountryDeath(caseCountryDeath) {
        this._caseCountryDeath = caseCountryDeath;
        this.render();
    }

    set caseCountryRecovered(caseCountryRecovered) {
        this._caseCountryRecovered = caseCountryRecovered;
        this.render();
    }

    set countryUpdateDate(countryUpdateDate) {
        this._countryUpdateDate = countryUpdateDate;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="text-center mt-2">
                <h4>Country: Indonesia</h4>
                <h5>Latest Update: ${this._countryUpdateDate}</h5>
            </div>
            <div class="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-evenly align-items-center">
                <div class="card text-white text-center border-warning mb-3 p-2" style="max-width: 18rem">
                    <div class="card-body text-warning">
                        <h1 class="card-text">
                        ${this._caseCountryConfirmed}
                        </h1>
                        <h6 class="card-title">Confirmed Country Covid Case</h6>
                    </div>
                </div>
                <div class="card text-white text-center border-danger mb-3 p-2" style="max-width: 18rem">
                    <div class="card-body text-danger">
                        <h1 class="card-text">
                        ${this._caseCountryDeath}
                        </h1>
                        <h6 class="card-title">Death Country Covid Case</h6>
                    </div>
                </div>
                <div class="card text-white text-center border-success mb-3 p-2" style="max-width: 18rem">
                        <div class="card-body text-success">
                        <h1 class="card-text">
                        ${this._caseCountryRecovered}
                        </h1>
                        <h6 class="card-title">Recovered Country Covid Case</h6>
                    </div>
                </div>
            </div>`
    } 
}

customElements.define('country-case', CountryCase);