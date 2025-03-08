export default function Instructions() {
    return (
      <div className="section">
        <div className="section-header" onClick={() => toggleContent('instructions')}>
          Instructions
          <span>&#x25B6;</span>
        </div>
        <div className="section-content" id="instructions">
          <div className="bor" style={{ border: '1px solid #cccccc' }}></div>
          <h3>Step 1: Upload Your Script</h3>
          <p>Each line of your script represents a subtitle box in the video. For example:</p>
          <div className="highlight">
            <p>If your script says, "Hello, my name is Steve," on the first line of your text file, the first subtitle box will display Hello, my name is Steve.</p>
          </div>
          <h3>Step 2: Highlight And Assign Clips</h3>
          <p className="highlight-words">Highlight words:</p>
          <p>Simply highlight the words in your script that you want to match with a video clip and assign a video clip.</p>
          <a href="javascript:void(0);" onClick={() => openModal('upload-video')}>Watch Video Tutorial</a>
        </div>
      </div>
    );
  }