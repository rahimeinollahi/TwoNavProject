<template>
    <div id="datascience" class="continer mt-1">
        <h1>A JOINT PROGRAM</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis in tenetur consequatur repellendus modi laudantium ipsum quas aliquam exercitationem incidunt blanditiis fuga, adipisci vero qui reiciendis dolor ab nobis iste?s</p>
        <p>Data Science is a joint bachelor of Tilburg University and Eindhoven University of Technology. This means you will have lectures in both Eindhoven and Tilburg. You will be taught by experts in this field – both Data Science Centers provide big data experts who will share their knowledge</p>
        <p>In this program, you will learn to analyze the large amounts of data that today's society operates on. You will learn to spot trends for businesses, government agencies or non-profit organizations. You will also focus on societal issues relating to data science including legal, social, ethical, business, and entrepreneurial issues. Courses cover various topics such as statistics, programming, data mining, business analytics, law and the ethics of data science</p>
        
        <h4>WHY DATA SCIENCE?</h4>
        <p>Data Science is a new discipline driven by the torrents of data avalaible today. Eindhoven University of Technology and Tilburg University have a joint bachelor Data Science. Why should you enroll for this program?</p>
       
        <h4>Major Data Science</h4>
        <p>You will be among the first data science graduates in an educational program that is especially designed for data science. The Data Science program has a strong international focus. We offer a small scale, interdisciplinary program on an internationally hot topic. </p>
        <p>After completing your degree, you will receive the title Bachelor of Science (BSc)</p>
        
        <h4>Study association Pattern</h4>
        <p>The study association represent the interests of Data Science students of TU/e, Tilburg University and Jheronimus Academy of Data Science in Den Bosch. It tries to let the students view their field of study from a different angle. It achieves this by means of excursions, lectures and symposia and by organizing a study trip. On the other hand, the association also organises sports tournaments, parties, a weekly drink, weekends and other forms of leisure activities to stimulate the relation between the members themselves</p>
        <h4>What is a Data Scientist</h4>
        <p>Data scientists are big data wranglers, gathering and analyzing large sets of structured and unstructured data. A data scientist’s role combines computer science, statistics, and mathematics. They analyze, process, and model data then interpret the results to create actionable plans for companies and other organizations</p>
        <p>Data scientists are analytical experts who utilize their skills in both technology and social science to find trends and manage data. They use industry knowledge, contextual understanding, skepticism of existing assumptions – to uncover solutions to business challenges</p>
        <p>A data scientist’s work typically involves making sense of messy, unstructured data, from sources such as smart devices, social media feeds, and emails that don’t neatly fit into a database.</p>

        <h3>Steps to Become a Data Scientist</h3>
        <p>Here are six common steps to consider if you’re interested in pursuing a career in data science:</p>
        <p>Pursue an undergraduate degree in data science or a closely related field
        Learn required skills to become a data scientist
        Consider a specialization
        Get your first entry-level data scientist job
        Review additional data scientist certifications and post-graduate learning
        Earn a master’s degree in data science</p>
        <h4> Learn the required skills to become a data scientist</h4>
        <p>Programming
            Machine Learning techniques
            Data Visualization and Reporting
            Risk Analysis
            Statistical analysis and Math
            Effective Communication
            Software Engineering Skills
            Data Mining, Cleaning and Munging
            Research
            Big Data Platforms
            Cloud Tools
            Data warehousing and structures</p>
            <p>Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them</p>
            <p>Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.</p>
            <p>To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign. Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.</p>

            <h6>Earn a master’s degree in data science</h6>
            <p>As data scientists achieve new levels of experience or change jobs, their responsibilities invariably change. For example, a person working alone in a mid-size company may spend a good portion of the day in data cleaning and munging. A high-level employee in a business that offers data-based services may be asked to structure big data projects or create new products.</p>
    </div>
</template>

<script>
    export default {
        name:'DataSicntisCp'
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'datascienst-font';
    src: url('../../assets/fonts/AlexandriaFLF-Bold.ttf');
}
*{font-family:'AlexandriaFLF-Italic' ;}
p{
    color: #222831;
    text-align: justify;
    padding: 0 5px;
    font-size: 1rem;
    font-weight: bold;
    text-indent: 30px;
    // display:list-item
}
h1,h2,h3,h4,h4,h6{
    text-shadow: 2px 3px 15px blue,
    3px 2px 15px red;
    color: yellow;
    font-weight: bold;
    margin-left: 5px;
}
#datascience{
    background-image: url("../../datasc.jpg");
    height: 100%;
    // object-fit: cover;
    background-size: cover;
        // background-size: 100% 100%;
    // position: relative;
    // width: 100%;
    // height: 100%;
    background-repeat: no-repeat;
    // display: block;

}
</style>