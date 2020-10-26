class MainMenu {

    get configuration_skills() {
        return $('#configuration-skills')
    }

    get planner() {
        return $('#planner')
    }

    get statistics() {
        return $('#statistics')
    }

    get businessEvents() {
        return $('#businessEvents')
    }

    get st_trainings() {
        return $('#st-trainings')
    }

    get technicians() {
        return $('#technicians')
    }

    get dashboard() {
        return $('#dashboard')
    }

    click_configurations_skills() {
        this.configuration_skills.click()
    }

    click_planer() {
        this.planner.click()
    }

    click_statistic() {
        this.statistics.click()
    }

    click_st_trainings() {
        this.st_trainings.click()
    }

    click_technicians() {
        this.technicians.click()
    }

    click_dashboard() {
        this.dashboard.click()
    }

    click_businessEvents() {
        this.businessEvents.click()
    }
}


module.exports = new MainMenu();