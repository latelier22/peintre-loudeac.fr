
const Section = ({section}) => {
  
  return (
   
     

<section className="container mx-auto my-8 p-4  first-line:rounded-md dark:bg-black border-myorange-600 border-solid border-2">
<h2 className="text-2xl text-myorange-600 font-bold mb-10">
{section.title}
</h2>

{section.body}

</section>

  );
};

export default Section;




