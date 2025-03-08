"use client";
import { useEffect, useState } from 'react';
import '/app/temp.css';
import '/styles/style.css';
import '/styles/music.css';
import Link from 'next/link';

const MainContent = () => {
  const [fontSize, setFontSize] = useState(22);
  const [borderRadius, setBorderRadius] = useState(26);
  const [resolution, setResolution] = useState('1:1');
  const [apiKeyError, setApiKeyError] = useState('');
  const [voiceIdError, setVoiceIdError] = useState('');
  const [fontError, setFontError] = useState('');
  const [dimensionStyles, setDimensionStyles] = useState({
    '1:1': { fontColor: '#ffffff', bgColor: '#000000' },
    '4:5': { fontColor: '#ffffff', bgColor: '#000000' },
    '16:9': { fontColor: '#ffffff', bgColor: '#000000' },
    '9:16': { fontColor: '#000000', bgColor: '#ffffff' },
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingDots, setProcessingDots] = useState(0);

  const isValidHex = (color) => /^#[0-9A-F]{6}$/i.test(color);

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setProcessingDots((prev) => (prev >= 3 ? 0 : prev + 1));
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  const validateForm = () => {
    let isValid = true;
    const apiKey = document.getElementById('api_key')?.value.trim() || '';
    const voiceId = document.getElementById('voice_id')?.value.trim() || '';
    const fontSelect = document.getElementById('font_select')?.value || '';

    if (!apiKey) {
      setApiKeyError('API key is required.');
      isValid = false;
    } else {
      setApiKeyError('');
    }

    if (!voiceId) {
      setVoiceIdError('Voice ID is required.');
      isValid = false;
    } else {
      setVoiceIdError('');
    }

    if (resolution !== '9:16' && !fontSelect) {
      setFontError('Please select a font.');
      isValid = false;
    } else {
      setFontError('');
    }

    if (!isValid) {
      const errorElement = document.querySelector('.error-message:not(:empty)');
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (validateForm()) {
      setTimeout(() => {
        window.location.href = '/scene';
        setIsProcessing(false);
      }, 2000);
    } else {
      setTimeout(() => setIsProcessing(false), 500);
    }
  };

  useEffect(() => {
    const apiKeyInput = document.getElementById('api_key');
    const voiceIdInput = document.getElementById('voice_id');
    const fontSelect = document.getElementById('font_select');

    const clearErrors = () => {
      if (apiKeyInput?.value) setApiKeyError('');
      if (voiceIdInput?.value) setVoiceIdError('');
      if (fontSelect?.value || resolution === '9:16') setFontError('');
    };

    apiKeyInput?.addEventListener('input', clearErrors);
    voiceIdInput?.addEventListener('input', clearErrors);
    fontSelect?.addEventListener('change', clearErrors);

    return () => {
      apiKeyInput?.removeEventListener('input', clearErrors);
      voiceIdInput?.removeEventListener('input', clearErrors);
      fontSelect?.removeEventListener('change', clearErrors);
    };
  }, [resolution]);

  useEffect(() => {
    const previewBox = document.getElementById('preview-box');
    const videoText = document.getElementById('videoText');
    const previewText = document.getElementById('previewText');

    if (previewBox && videoText && previewText) {
      switch (resolution) {
        case '1:1':
          previewBox.style.width = '600px';
          previewBox.style.height = '600px';
          videoText.style.fontSize = '48px';
          previewText.style.width = '350px';
          break;
        case '4:5':
          previewBox.style.width = '480px';
          previewBox.style.height = '600px';
          videoText.style.fontSize = '42px';
          previewText.style.width = '350px';
          break;
        case '16:9':
          previewBox.style.width = '680px';
          previewBox.style.height = '382px';
          videoText.style.fontSize = '38px';
          previewText.style.width = '350px';
          break;
        case '9:16':
          previewBox.style.width = '382px';
          previewBox.style.height = '680px';
          videoText.style.fontSize = '34px';
          previewText.style.width = '300px';
          break;
      }
    }
  }, [resolution]);

  useEffect(() => {
    const slider = document.getElementById('mySlider');
    const sliderValue = document.getElementById('SliderValue');
    const previewText = document.getElementById('previewText');
    const borderRadiusSlider = document.getElementById('subtitleBorderRadiusSlider');
    const previewBackground = document.getElementById('previewBackground');
    const tiktokPreview = document.getElementById('tiktokPreview');
    const tiktokTextSpans = document.querySelectorAll('.text-wrapper2-span');
    const colorPicker1 = document.getElementById('colorPicker1');
    const colortext1 = document.getElementById('colortext1');
    const colorPicker2 = document.getElementById('colorPicker2');
    const colortext2 = document.getElementById('colortext2');
    const color1Box = document.getElementById('color1');
    const color2Box = document.getElementById('color2');
    const fontSelect = document.getElementById('font_select');

    // Font size slider
    if (slider && sliderValue && previewText) {
      slider.value = fontSize;
      sliderValue.textContent = fontSize;
      previewText.style.fontSize = `${fontSize * 0.8}px`;
      const percent = ((fontSize - slider.min) / (slider.max - slider.min)) * 100;
      slider.style.background = `linear-gradient(to right, #864AF9 ${percent}%, #D9D9D9 ${percent}%)`;

      slider.addEventListener('input', () => {
        const value = slider.value;
        setFontSize(value);
        sliderValue.textContent = value;
        previewText.style.fontSize = `${value * 0.8}px`;
        const newPercent = ((value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, #864AF9 ${newPercent}%, #D9D9D9 ${newPercent}%)`;
      });
    }

    // Border radius slider
    if (borderRadiusSlider && previewBackground) {
      borderRadiusSlider.value = borderRadius;
      previewBackground.style.borderRadius = `${borderRadius}px`;
      const radiusPercent = ((borderRadius - borderRadiusSlider.min) / (borderRadiusSlider.max - borderRadiusSlider.min)) * 100;
      borderRadiusSlider.style.background = `linear-gradient(to right, #864AF9 ${radiusPercent}%, #D9D9D9 ${radiusPercent}%)`;

      borderRadiusSlider.addEventListener('input', () => {
        const value = borderRadiusSlider.value;
        setBorderRadius(value);
        previewBackground.style.borderRadius = `${value}px`;
        const newPercent = ((value - borderRadiusSlider.min) / (borderRadiusSlider.max - borderRadiusSlider.min)) * 100;
        borderRadiusSlider.style.background = `linear-gradient(to right, #864AF9 ${newPercent}%, #D9D9D9 ${newPercent}%)`;
      });
    }

    // Font handling
    if (previewText && tiktokPreview && tiktokTextSpans && fontSelect) {
      if (resolution === '9:16') {
        previewText.style.fontFamily = 'tiktokfont';
        tiktokPreview.style.fontFamily = 'tiktokfont';
        tiktokTextSpans.forEach((span) => {
          span.style.fontFamily = 'tiktokfont';
        });
        fontSelect.value = 'tiktokfont'; // Sync dropdown but it’s hidden
      } else {
        // Reset to placeholder and clear font family if no valid selection
        if (!fontSelect.value || fontSelect.value === 'tiktokfont') {
          fontSelect.value = '';
          previewText.style.fontFamily = ''; // Browser default
        } else {
          previewText.style.fontFamily = fontSelect.value;
        }
        tiktokPreview.style.fontFamily = '';
        tiktokTextSpans.forEach((span) => {
          span.style.fontFamily = '';
        });
      }
    }

    // Font selection for non-TikTok resolutions
    if (fontSelect && previewText && resolution !== '9:16') {
      fontSelect.addEventListener('change', (event) => {
        if (event.target.value && event.target.value !== 'tiktokfont') {
          previewText.style.fontFamily = event.target.value;
        } else {
          previewText.style.fontFamily = ''; // Reset to browser default
        }
      });
    }

    // Sync colors with dimensionStyles and update input boxes
    if (colorPicker1 && colortext1 && color1Box && previewText) {
      const fontColor = dimensionStyles[resolution].fontColor;
      colorPicker1.value = fontColor;
      colortext1.value = fontColor;
      color1Box.style.backgroundColor = fontColor;
      previewText.style.color = fontColor;
      if (resolution === '9:16' && tiktokTextSpans) {
        tiktokTextSpans.forEach((span) => (span.style.color = fontColor));
      }
    }

    if (colorPicker2 && colortext2 && color2Box && previewBackground) {
      const bgColor = dimensionStyles[resolution].bgColor;
      colorPicker2.value = bgColor;
      colortext2.value = bgColor;
      color2Box.style.backgroundColor = bgColor;
      previewBackground.style.backgroundColor = bgColor;
      if (resolution === '9:16' && tiktokTextSpans) {
        tiktokTextSpans.forEach((span) => (span.style.backgroundColor = bgColor));
      }
    }

    // Color picker handlers
    if (colorPicker1 && colortext1 && previewText && color1Box) {
      const updateFontColor = (color) => {
        if (isValidHex(color)) {
          setDimensionStyles((prev) => ({
            ...prev,
            [resolution]: { ...prev[resolution], fontColor: color },
          }));
          colorPicker1.value = color;
          colortext1.value = color;
          previewText.style.color = color;
          color1Box.style.backgroundColor = color;
          if (resolution === '9:16' && tiktokTextSpans) {
            tiktokTextSpans.forEach((span) => (span.style.color = color));
          }
        }
      };

      colorPicker1.addEventListener('change', (e) => updateFontColor(e.target.value));
      colortext1.addEventListener('change', (e) => updateFontColor(e.target.value));
    }

    if (colorPicker2 && colortext2 && previewBackground && color2Box) {
      const updateBgColor = (color) => {
        if (isValidHex(color)) {
          setDimensionStyles((prev) => ({
            ...prev,
            [resolution]: { ...prev[resolution], bgColor: color },
          }));
          colorPicker2.value = color;
          colortext2.value = color;
          previewBackground.style.backgroundColor = color;
          color2Box.style.backgroundColor = color;
          if (resolution === '9:16' && tiktokTextSpans) {
            tiktokTextSpans.forEach((span) => (span.style.backgroundColor = color));
          }
        }
      };

      colorPicker2.addEventListener('change', (e) => updateBgColor(e.target.value));
      colortext2.addEventListener('change', (e) => updateBgColor(e.target.value));
    }

    // Resolution selection
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.addEventListener('click', () => {
        const selectedResolution = box.getAttribute('data-resolution');
        setResolution(selectedResolution);
        boxes.forEach((b) => {
          b.style.border = '1px solid #88888877';
          const circleOuter = b.querySelector('.circle-outer');
          const circleInner = b.querySelector('.circle-inner');
          if (circleOuter) circleOuter.style.border = '3px solid #D9D9D9';
          if (circleInner) circleInner.style.backgroundColor = '#D9D9D9';
        });
        box.style.border = '1px solid #864AF9';
        const selectedCircleOuter = box.querySelector('.circle-outer');
        const selectedCircleInner = box.querySelector('.circle-inner');
        if (selectedCircleOuter) selectedCircleOuter.style.border = '3px solid #864AF9';
        if (selectedCircleInner) selectedCircleInner.style.backgroundColor = '#864AF9';

        // Font and color handling on resolution change
        if (fontSelect && previewText && tiktokPreview && tiktokTextSpans) {
          if (selectedResolution === '9:16') {
            fontSelect.value = 'tiktokfont';
            previewText.style.fontFamily = 'tiktokfont';
            tiktokPreview.style.fontFamily = 'tiktokfont';
            tiktokTextSpans.forEach((span) => {
              span.style.fontFamily = 'tiktokfont';
            });
          } else {
            if (!fontSelect.value || fontSelect.value === 'tiktokfont') {
              fontSelect.value = ''; // Reset to "Select A Font"
              previewText.style.fontFamily = ''; // Browser default
            } else {
              previewText.style.fontFamily = fontSelect.value;
            }
            tiktokPreview.style.fontFamily = '';
            tiktokTextSpans.forEach((span) => {
              span.style.fontFamily = '';
            });
          }
        }
      });
    });

    // TikTok visibility
    const previewBackgroundDiv = document.getElementById('previewBackground');
    const previewBox = document.getElementById('preview-box');
    const videoText = document.getElementById('videoText');
    const tiktokPreviewDiv = document.getElementById('tiktokPreview');
    const fontSelectLabel = document.querySelector('.Upload-Font-File-text');
    const fontSelectDropdown = document.querySelector('.Upload-Font-File-Upload');
    const fontSizeLabel = document.querySelector('.Font-Size-text');
    const fontSizeSlider = document.querySelector('.Font-Size-Slider');
    const borderRadiusLabel = document.querySelector('.slider-container label');
    const borderRadiusSliderDiv = document.querySelector('.slider-container');

    if (resolution === '9:16') {
      previewBackgroundDiv.style.display = 'none';
      tiktokPreviewDiv.style.display = 'flex';
      fontSelectLabel.style.display = 'none';
      fontSelectDropdown.style.display = 'none';
      fontSizeLabel.style.display = 'none';
      fontSizeSlider.style.display = 'none';
      borderRadiusLabel.style.display = 'none';
      borderRadiusSliderDiv.style.display = 'none';
      videoText.style.display = 'none';
      previewBox.style.background = `url("https://vlsmlsaker.s3.amazonaws.com/assets/background/tiktok.png") center/cover no-repeat`;
    } else {
      previewBox.style.background = '#EEEEEE';
      videoText.style.display = 'flex';
      previewBackgroundDiv.style.display = 'flex';
      tiktokPreviewDiv.style.display = 'none';
      fontSelectLabel.style.display = 'flex';
      fontSelectDropdown.style.display = 'flex';
      fontSizeLabel.style.display = 'flex';
      fontSizeSlider.style.display = 'block';
      borderRadiusLabel.style.display = 'block';
      borderRadiusSliderDiv.style.display = 'block';
    }
  }, [resolution, fontSize, borderRadius, dimensionStyles]);

  useEffect(() => {
    const submitButton = document.getElementById('submit_form');
    if (submitButton) {
      submitButton.addEventListener('click', handleSubmit);
    }
    return () => {
      if (submitButton) {
        submitButton.removeEventListener('click', handleSubmit);
      }
    };
  }, []);


  return (
    <div className="main-dimension-div">
      <form action="/text/" method="post" encType="multipart/form-data" className="form" id="text_form">
        <input type="hidden" name="csrfmiddlewaretoken" />
        <div className="customise-main">
          <span>Create Your Perfect Video Creative: <br /> Upload, Customize, and Convert!</span>
        </div>
        <div className="card-text"><h3>Tutorial Video:</h3></div>
        <div className="video-card">
          <div className="video-card-sub-div">
            <div id="videoPreviewContainer" className="videoPreviewContainer"></div>
          </div>
        </div>
        <div className="pick-dimension">Pick Your Dimensions</div>
        <div className="options video-sizes video-sizes-div">
          <div className="box" data-resolution="1:1">
            <input type="radio" name="resolution" value="1:1" defaultChecked hidden />
            <div className="below-input">
              <div className="square">Square</div>
              <div className="square-border"></div>
              <div className="text one-one">1:1</div>
              <div className="circle-outer"><div className="circle-inner"></div></div>
            </div>
          </div>
          <div className="box tiktok-box" data-resolution="4:5">
            <input type="radio" name="resolution" value="4:5" hidden />
            <div className="tiktok-box-sub">
              <div className="vertical-portrait">Vertical/Portrait</div>
              <div className="sub-vertical"></div>
              <div className="text four-five">4:5</div>
              <div className="circle-outer tiktok-circle"><div className="circle-inner tiktok-inner"></div></div>
            </div>
          </div>
          <div className="box youtube-main" data-resolution="16:9">
            <input type="radio" name="resolution" value="16:9" hidden />
            <div className="youtube-sub">
              <div className="youtube-text">YouTube</div>
              <div className="youtube-border"></div>
              <div className="text sixteen-nine">16:9</div>
              <div className="circle-outer youtube-outer"><div className="circle-inner youtube-inner"></div></div>
            </div>
          </div>
          <div className="box nine-sixteen-main" data-resolution="9:16">
            <input type="radio" name="resolution" value="9:16" hidden />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="tiktok-heading">TikTok/Reels</div>
              <div className="tiktok-border"></div>
              <div className="text nine-sixteen-text">9:16</div>
              <div className="circle-outer tiktok-circle2"><div className="circle-inner tiktok-circle3"></div></div>
            </div>
          </div>
        </div>
        <div className="eleven-labs-main">
          <div className="eleven-labs-sub">
            <div className="11Labs-Api-key-text eleven-labs-main-text">
              <div className="eleven-labs-heading">ElevenLabs Api Key:</div>
              <div className="vh-parent">
                <div className="vh-child">
                  <span className="text3">
                    An unique code from your Eleven Labs account that lets VideoCrafter.io use your selected AI voices.
                    Find it in your Eleven Labs account under API settings.
                  </span>
                </div>
                ?
              </div>
            </div>
            <div className="11Labs-Api-key-textarea" style={{ marginBottom: '24px' }}>
              <input id="api_key" type="text" className="text3 text3-input" name="elevenlabs_apikey" placeholder="ElevenLabs Api Key"  />
              <p className="error-message" style={{ color: 'red' }}>{apiKeyError}</p>
            </div>
            <div className="Voice-ID-text">
              <div className="Voice-ID-text-sub">Voice ID:</div>
              <div className="vh-parent">
                <div className="vh-child">
                  <span className="text3">
                    The specific identifier for the voice you want to use. Each voice in your Eleven Labs account has its own unique ID.
                  </span>
                </div>
                ?
              </div>
            </div>
            <div className="Voice-ID-textarea" style={{ marginBottom: '24px' }}>
              <input type="text" id="voice_id" className="text3 text3-input" placeholder="Enter Voice ID" name="voiceid" />
              <p className="error-message" style={{ color: 'red' }}>{voiceIdError}</p>
            </div>
            <div className="Line for-border"></div>
            <div className="subtitledesign">Subtitle Design</div>
            <div className="Upload-Font-File-text"><div className="choose-font">Choose Font:</div></div>
            <div className="Upload-Font-File-Upload">
              <select id="font_select" required name="font_select" defaultValue="">
                <option className="text3" value="" disabled>Select A Font</option>
                <option className="text3" style={{ fontFamily: 'Arial' }} value="Arial">Arial</option>
                <option className="text3" style={{ fontFamily: 'OpenSans-Semibold' }} value="OpenSans-Semibold">Open Sans Condensed</option>
                <option className="text3" style={{ fontFamily: 'Helvetica' }} value="Helvetica">Helvetica</option>
                <option className="text3" style={{ fontFamily: 'Roboto-Medium' }} value="Roboto-Medium">Roboto Medium</option>
                <option className="text3" style={{ fontFamily: 'tiktokfont', display: 'none' }} value="tiktokfont">Proxima Nova Semibold (Only For TikTok)</option>
                <option className="text3" style={{ fontFamily: 'Montserrat' }} value="Montserrat-SemiBold">Montserrat SemiBold</option>
                <option className="text3" style={{ fontFamily: 'Montserrat-Bold' }} value="Montserrat-Bold">Montserrat Bold</option>
                <option className="text3" style={{ fontFamily: 'Montserrat-ExtraBold' }} value="Montserrat-ExtraBold">Montserrat ExtraBold</option>
              </select>
            </div>
            <p className="error-message" style={{ color: 'red', marginTop: '-20px' }}>{fontError}</p>
            <div className="Font-Color-text"><div className="font-color">Font Color:</div></div>
            <div className="Font-Color-textarea">
              <div id="color1"><input type="color" name="font_color" id="colorPicker1" defaultValue="#ffffff" /></div>
              <input id="colortext1" type="text" className="focusdefault" placeholder="#ffffff" defaultValue="#ffffff" />
            </div>
            <div className="Subtitle-text"><div className="Subtitle-text-heading">Subtitles Background Color:</div></div>
            <div className="Subtitle-textarea">
              <div id="color2"><input type="color" name="subtitle_box_color" id="colorPicker2" defaultValue="#000000" /></div>
              <input id="colortext2" type="text" className="focusdefault" placeholder="#000000" defaultValue="#000000" />
            </div>
            <div className="Font-Size-text">
              <div className="Font-Size-text-heading">Font Size: <span id="recommended-font-size">(Recommended Font Size: 22)</span></div>
              <span id="SliderValue">{fontSize}</span>
            </div>
            <div className="Font-Size-Slider">
              <input type="range" name="font_size1" min="0" max="25" value={fontSize} className="slider" id="mySlider" style={{ width: '100%' }} />
              <input type="number" hidden name="font_size" value={fontSize * 2} />
            </div>
            <div className="slider-container">
              <div className="slider-container-sub">
                <label htmlFor="subtitleBorderRadiusSlider" className="box-roundness-text">Subtitle Box Roundness:</label>
                <span id="subtitleBorderRadiusValue">{borderRadius}</span>
              </div>
              <input type="range" name="box_radius" id="subtitleBorderRadiusSlider" className="subtitle-border-radius-slider" min="0" max="50" value={borderRadius} />
            </div>
          </div>
        </div>
        <br /><br />
        <div className="Preview" id="Preview">
          <div className="Preview-text"><div className="Preview-text-heading">Preview</div></div>
          <div id="preview-box">
            <span id="videoText">Your Selected Video <br /> Scene Will Go Here</span>
            <div id="previewBackground" className="previewBackground2">
              <span id="previewText">This Is How Your Original Subtitle Text Will Be Displayed</span>
            </div>
            <div id="tiktokPreview" className="container2">
              <p className="text-wrapper2">
                <span className="text-wrapper2-span">This Is How Your Original</span>
                <span className="text-wrapper2-span">Subtitle Text Will Show.</span>
              </p>
            </div>
          </div>
        </div>
        <Link href='/scene' style={{textDecoration :'none'}}>
        <button id="submit_form" type="submit" className="done-button">
          <span id="button-text" style={{ fontSize: '18px', fontWeight: '500', lineHeight: '21.94px', textAlign: 'left' }}>
            {isProcessing ? `Processing${'.'.repeat(processingDots)}` : 'Proceed To Scene Selection'}
          </span>
        </button>
        </Link>
      </form>
    </div>
  );
};

export default MainContent;