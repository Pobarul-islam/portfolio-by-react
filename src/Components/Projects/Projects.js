import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleProject from './SingleProject';



const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    },[])
    return (
        <div className='mt-20'>
            <h2 className='text-4xl text-center font-bold mt-10'>Projects</h2>
              <div className='grid grid-cols-3 ml-10 gap-y-10 mt-10'>
           
            {
                projects.map(project => <SingleProject
                    key={project}
                    project={project}
                ></SingleProject>)
         }
          
        </div>
      </div>
    );
};

export default Projects;