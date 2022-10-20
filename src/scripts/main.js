import "./components/app-countryCase.js";
import "./components/app-globalCase.js";
import CovidText from "./components/navbar-text.json";
import moment from "moment";

const main = () => {
    const baseUrl = "https://covid19.mathdro.id/api";
    const covidMsg = document.querySelector('span');
    const countryCaseElement = document.querySelector('country-case');
    const globalCaseElement = document.querySelector('global-case');

    const getIndonesiaCase = () => {
        fetch(`${baseUrl}/countries/Indonesia`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderCountryCase(responseJson);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            });
    }

    const getGlobalCase = () => {
        fetch(`${baseUrl}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderGlobalCase(responseJson);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            });
    }

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    const renderCountryCase = (result) => {
        countryCaseElement.caseCountryConfirmed = result.confirmed.value;
        countryCaseElement.caseCountryDeath = result.deaths.value;
        countryCaseElement.caseCountryRecovered = result.recovered.value;
        countryCaseElement.countryUpdateDate = moment(result.lastUpdate).format("MMMM Do YYYY, h:mm:ss a");
    }

    const renderGlobalCase = (result) => {
        globalCaseElement.caseGlobalConfirmed = result.confirmed.value;
        globalCaseElement.caseGlobalDeath = result.deaths.value;
        globalCaseElement.caseGlobalRecovered = result.recovered.value;
        globalCaseElement.globalUpdateDate = moment(result.lastUpdate).format("MMMM Do YYYY, h:mm:ss a");
    }

    const generateRandomText = () => {
        CovidText.forEach( (teks, i) => {
           covidMsg.innerHTML = (teks.text[Math.floor(Math.random() * teks.text.length)]);
        });
        
    }

    document.addEventListener('DOMContentLoaded', () => {
        getIndonesiaCase();
        getGlobalCase();
        generateRandomText();
    });
    
}

export default main;