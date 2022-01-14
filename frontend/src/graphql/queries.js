import { gql } from "@apollo/client";

// teamName: [Team!]
// allTeam: [Team!]
// teamTime(team: String!): Team!
// timeMatch(time: String!): [Team!]
// teamMatch(team: String!): Match!
// allMatch: [Match!]
// adminData: AdminData!

export const TEAMNAME_QUERY = gql`
    query TeamNameQuery {
        teamName {
            team
        }
    }
`

export const ALLTEAM_QUERY = gql`
    query AllTeamQuery {
        allTeam {
            team
            time
        }
    }
`

export const TEAMTIME_QUERY = gql`
    query TeamTimeQuery($team: String!) {
        teamTime(team: $team) {
            team
            time
        }
    }
`

export const TIMEMATCH_QUERY = gql`
    query TimeMatchQuery($time: String!) {
        timeMatch(time: $time) {
            team
            time
        }
    }
`

export const TEAMMATCH_QUERY = gql`
    query TeamMatchQuery($team: String!) {
        teamMatch(team: $team) {
            matchName
            team_1
            team_2
            time
        }
    }
`

export const ALLMATCH_QUERY = gql`
    query AllMatchQuery {
        allMatch {
            matchName
            time
        }
    }
`

export const ADMINDATA_QUERY = gql`
    query AdminDataQuery {
        adminData {
            admin
            isRegisterClosed
        }
    }
`