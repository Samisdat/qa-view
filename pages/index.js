import Head from 'next/head'
import {getProjects} from "../data/data";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));


export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
      <div>
        <Head>
          <title>QA Viewer - Projects</title>
        </Head>
        <ul>
          {Object.entries(projects.projects)
              .map(([key, value], i) => {
                return <React.Fragment>
                  <ListSubheader className={classes.subheader}>{key.toUpperCase()}</ListSubheader>
                  {group[key].map(( animal: Animal ) => {
                    const href = `/${animalUrlPart}/${animal.slug}`

                    return(
                        <ListItemLink href={href}>{animal.title}</ListItemLink>
                    )}
                  )}
                </React.Fragment>
              })}
          <li>

          </li>
        </ul>
      </div>

  );
}
export async function getStaticProps(context) {

  let projects = await getProjects();

  const indexProps = {
    projects: projects
  };

  return {
    props: indexProps
  }
}
