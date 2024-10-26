# Quiz App

A simple interactive quiz application built with HTML, CSS, and vanilla JavaScript.

## Features

- Multiple choice questions
- Score tracking
- Previous and Next navigation
- Instant feedback on answers
- Results summary
- Restart functionality

## File Structure

```
quiz-app/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Installation

1. Clone the repository or download the files
```bash
git clone https://github.com/yourusername/quiz-app.git
```

2. Navigate to the project directory
```bash
cd quiz-app
```

3. Open `index.html` in your web browser

## Usage

1. The quiz starts automatically when you open the page
2. Select your answer from the multiple choice options
3. Use the "Previous" and "Next" buttons to navigate between questions
4. Your score updates automatically as you answer questions
5. After completing all questions, you'll see your final score
6. Click "Restart Quiz" to try again

## Customizing Questions

To add or modify questions, edit the `quizData` array in `script.js`:

```javascript
const quizData = [
    {
        question: "Your question here?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ],
        correct: 0  // Index of correct answer (0-3)
    },
    // Add more questions...
];
```

## Technical Details

### HTML Structure
- Quiz container
- Question display area
- Options buttons
- Navigation controls
- Score display
- Results section

### CSS Features
- Responsive design
- Interactive button states
- Correct/incorrect answer highlighting
- Clean and modern styling

### JavaScript Functionality
- Question loading and navigation
- Answer validation
- Score calculation
- Quiz state management
- Results display

## Browser Compatibility

The Quiz App is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

## Future Enhancements

Possible improvements that could be added:
1. Timer functionality
2. Progress bar
3. Different question types
4. Local storage for high scores
5. Sound effects
6. Animation effects
7. Category selection

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

[Srujit varasala]
- GitHub: [@srujit12091997](https://github.com/srujit12091997)
- LinkedIn: [Srujit varasala](https://www.linkedin.com/in/srujitvarasala/)

## Acknowledgments

- Design inspired by modern quiz applications
- Icons from [Font Awesome](https://fontawesome.com)
- Special thanks to contributors

## Support

For support, email <srujit.v@gmail.com> or create an issue in this repository.