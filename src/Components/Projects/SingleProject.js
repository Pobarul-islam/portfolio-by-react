import React from 'react';


const SingleProject = ({ project }) => {
    const { name, img, description, more } = project;
    return (
        <div>
            <div class="card project w-96 h-96 mb-5 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img style={{width: "25rem"}} src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{description} </p>
    <div class="card-actions">
    <a className='btn' href={more} rel='noreferrer'>More</a>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProject;