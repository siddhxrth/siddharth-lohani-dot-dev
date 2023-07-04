export default function Projects() {
    return (
        <>
            <h1>Featured Projects</h1>


            <div className="flex-grid-thirds">
                <button className="col">
                    <h3>Genesis Grade Alerts</h3>
                    <p>A simple Python application which notifies users when their grades are updated in the Genesis Parent Portal via SMS, either through Gmail&apos;s SMTP server or via Twilio&apos;s SMS API.</p>
                </button>
                <button className="col">
                    <h3>NJ Covid Alerts</h3>
                    <p>Coronavirus tracker for the state of New Jersey. Built with Selenium, implemented in Python. Seeing that cases keep rising, it&apos;s important to be aware of the new developments in cases, vaccines, and tests.</p>
                </button>
                <button className="col">
                    <h3>2020 Election Result Tweeter</h3>
                    <p>The 2020 election was a rough one, with historic voter turnout. This is a Python Web Scraper which tweeted live election data from ABC on my personal Twitter account.</p>
                </button>
            </div>
            <div className="flex-grid-thirds">
                <button className="col">
                    <h3>iMessage Exporter</h3>
                    <p>A Command Line Interface (CLI) that analyzes and exports iMessage conversations into .csv files containing messages, timestamps, and IDs 📲</p>
                </button>
                <button className="col">
                    <h3>title</h3>
                    <p>description</p>
                </button>
                <button className="col">
                    <h3>title</h3>
                    <p>description</p>
                </button>
            </div>
            <div className="flex-grid-thirds">
                <button className="col">
                    <h3>title</h3>
                    <p>description</p>
                </button>
                <button className="col">
                    <h3>title</h3>
                    <p>description</p>
                </button>
                <button className="col">
                    <h3>title</h3>
                    <p>description</p>
                </button>
            </div>
        </>
    );
}