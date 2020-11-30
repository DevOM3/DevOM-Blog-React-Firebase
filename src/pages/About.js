import './About.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const aboutText = `Wondering who I am? I'm just 17 years old guy who loves programming. I was 15 when I started programming at that time I was studying diploma in Computer Engineering. Starting from C I learnt C++, Python, Java, JavaScript, Dart, PHP, BrainFuck, C#, HTML, CSS, etc. languages. But only studying is not important so I started Project oriented study of all these programming languages and so learnt How to make Android applications, Desktop Softwares, Console Games, PC Games, Mobile Games, Websites, Cyber Security , etc. I made projects starting with Python as it is my most favourite language. I made many projects in it and then learnt some of its frameworks and packages like Flask, Django, PyGame. After learning PyGame I thought what if I learn Game Engines? and so I switched over to GoDot Game Engine, the first Game Engine that I learnt. I love it because GDScript the language which it uses is very close to Python. We were having C# in our syllabus so I was knowing how to program using it and also have some of its projects related to Windows Forms, so I switched over to the Unity Game Engine and made some Games up there. But after some months I eventually switched over to Android. I was having little experience in Java so I started learning Android Framework and make some basic apps in Android Studio, but I thought what about iPhones? So I learnt Dart programming language to learn Flutter Framework. I learnt Flutter framework, Flutter Animations, and many more related things; but React Native was trending and I was knowing basic JavaScript, so this was the time to master it. I started learning JavaScript again from scratch then learnt Node.js and then went over to the React Framework. I learnt basics of it and then went over to the React Native and learnt it but not deeply. One day I was thinking about servers so I studied basics of GoLang in 2 weeks. I was interested in Hacking so I learnt it partially and also I learnt PHP as it was little bit necessary for Cyber Security. This is how I learnt Desktop Software Development, Android Development, Flutter Development, React Development, Web Development, Game Development, Ethical Hacking etc.`;

    return (
        <div className="container my-2 p-4">
            <h2 className="about-title">Hello, I'm DevOM<br /><br /></h2>
            <h5 className="about-body">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{aboutText}</h5>
        </div>
    )
}

export default About;
