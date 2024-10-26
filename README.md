# Quiz App

A simple interactive quiz application built with HTML, CSS, and vanilla JavaScript.

## Features

- Multiple choice questions
- Score tracking
- Previous and Next navigation
- Instant feedback on answers
- Results summary
- Restart functionality
- High scores tracking
- Progress bar
- Multiple screens (Start, Quiz, Results, High Scores)
- Animated transitions
- Local storage for saving scores

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
git clone https://github.com/srujit12091997/quiz-app.git
```

2. Navigate to the project directory
```bash
cd quiz-app
```

3. Open `index.html` in your web browser

## Usage

1. Click "Start Quiz" on the welcome screen
2. Select your answer from the multiple choice options
3. Receive instant feedback on your answer
4. Use the "Previous" and "Next" buttons to navigate between questions
5. Track your progress with the progress bar
6. View your score updating in real-time
7. See your final results and save your score
8. View high scores from the main menu
9. Clear high scores or restart the quiz

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
- Multiple screen containers
- Question display area
- Options buttons
- Navigation controls
- Score display
- Progress bar
- High scores section

### CSS Features
- Responsive design
- Interactive button states
- Correct/incorrect answer highlighting
- Clean and modern styling
- Smooth animations
- Progress bar visualization

### JavaScript Functionality
- Screen management
- Question loading and navigation
- Answer validation
- Score calculation
- Progress tracking
- High score management
- Local storage implementation
- State management

## Browser Compatibility

The Quiz App is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

## Future Enhancements

Possible improvements that could be added:
1. Timer functionality
2. Different question types
3. Sound effects
4. Category selection
5. Difficulty levels
6. User accounts
7. Social sharing
8. Question pool randomization

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

[Srujit Varasala]
- GitHub: [@srujit12091997](https://github.com/srujit12091997)
- LinkedIn: [Srujit Varasala](https://www.linkedin.com/in/srujitvarasala/)

## Acknowledgments

- Design inspired by modern quiz applications
- Icons from [Font Awesome](https://fontawesome.com)
- Special thanks to contributors

## Support

For support, email srujit.v@gmail.com or create an issue in this repository.