#!/usr/bin/env node

// Modules
const boxen = require("boxen");
const chalk = require("chalk");

const data = {
    name: chalk.red("                  Henrique Tavares"),
    work: `${chalk("Front End Developer at")} ${chalk.blueBright("Develcode")}`,

    github: chalk.gray("https://github.com/") + chalk.green("tavareshenrique"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.green("tavareshenrique"),
    email: chalk.green("ihenrits@gmail.com"),
    web: chalk.green("https://henriquetavares.com"),
    skills: chalk.redBright("JS, TS, React, React Native, Node"),

    npx: chalk.red("npx henrique"),

    labelWork: ("         "),
    labelGitHub: chalk.white.bold("        GitHub:"),
    labelLinkedIn: chalk.white.bold("      LinkedIn:"),
    labelEmail: chalk.white.bold("         Email:"),
    labelWeb: chalk.white.bold("           Web:"),
    labelSkills: chalk.blue.bold("        Skills:"),
    labelCard: chalk.white.bold("          Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelEmail}  ${data.email}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelSkills}  ${data.skills}`,
        ``,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        
        `${chalk.italic(
            "                       think different. "
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "bold",
        borderColor: "magenta"
    }
);

console.log(me);