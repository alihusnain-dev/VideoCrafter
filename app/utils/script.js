// Dropdown Script
export const setupDropdown = () => {
  const pfp = document.getElementById('pfp');
  const dropdown = document.getElementById('pfpdropdown');

  if (pfp && dropdown) {
    pfp.addEventListener('click', () => {
      dropdown.classList.toggle('not-present');
      dropdown.classList.toggle('present');
    });

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && !pfp.contains(event.target)) {
        dropdown.classList.remove('present');
        dropdown.classList.add('not-present');
      }
    });
  }
};

// Slider Script
export const setupSliders = () => {
  const fontSlider = document.getElementById('mySlider');
  const borderRadiusSlider = document.getElementById('subtitleBorderRadiusSlider');
  const opacitySlider = document.getElementById('subtitleOpacitySlider');
  const previewText = document.getElementById('previewText');
  const previewBackground = document.getElementById('previewBackground');

  const updateSliderBackground = (slider) => {
    const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #864AF9 ${value}%, #D9D9D9 ${value}%)`;
  };

  if (fontSlider) {
    fontSlider.addEventListener('input', () => {
      const fontSize = fontSlider.value;
      previewText.style.fontSize = `${fontSize * 0.8}px`;
      document.getElementById('SliderValue').textContent = fontSize;
      updateSliderBackground(fontSlider);
    });
  }

  if (borderRadiusSlider) {
    borderRadiusSlider.addEventListener('input', () => {
      const borderRadiusValue = borderRadiusSlider.value;
      previewBackground.style.borderRadius = `${borderRadiusValue}px`;
      document.getElementById('subtitleBorderRadiusValue').textContent = borderRadiusValue;
      updateSliderBackground(borderRadiusSlider);
    });
  }

  if (opacitySlider) {
    opacitySlider.addEventListener('input', () => {
      const opacityValue = opacitySlider.value;
      previewBackground.style.opacity = opacityValue / 100;
      document.getElementById('subtitleOpacityValue').textContent = `${opacityValue}%`;
      updateSliderBackground(opacitySlider);
    });
  }
};

// Color Picker Script
export const setupColorPickers = () => {
  const colorPicker1 = document.getElementById('colorPicker1');
  const colorPicker2 = document.getElementById('colorPicker2');
  const colortext1 = document.getElementById('colortext1');
  const colortext2 = document.getElementById('colortext2');
  const colorBox1 = document.getElementById('color1');
  const colorBox2 = document.getElementById('color2');
  const previewText = document.getElementById('previewText');
  const previewBackground = document.getElementById('previewBackground');
  const subtitleSpans = document.querySelectorAll('#tiktokPreview span');

  const enforceColorInputRules = (inputElement) => {
    inputElement.addEventListener('input', () => {
      let value = inputElement.value;

      // Ensure the input starts with a '#'
      if (!value.startsWith('#')) {
        value = `#${value}`;
      }

      // Remove any non-hexadecimal characters
      value = value.replace(/[^0-9A-Fa-f#]/g, '');

      // Limit the input to 7 characters (including the '#')
      if (value.length > 7) {
        value = value.substring(0, 7);
      }

      inputElement.value = value;
    });

    inputElement.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace' && inputElement.value === '#') {
        event.preventDefault();
      }
    });
  };

  if (colorPicker1 && colortext1 && colorBox1) {
    colorPicker1.addEventListener('input', () => {
      const selectedColor = colorPicker1.value;
      colortext1.value = selectedColor;
      colorBox1.style.backgroundColor = selectedColor;
      previewText.style.color = selectedColor;
      subtitleSpans.forEach((span) => (span.style.color = selectedColor));
    });

    colortext1.addEventListener('input', () => {
      const selectedColor = colortext1.value;
      if (/^#[0-9A-F]{6}$/i.test(selectedColor)) {
        colorPicker1.value = selectedColor;
        colorBox1.style.backgroundColor = selectedColor;
        previewText.style.color = selectedColor;
        subtitleSpans.forEach((span) => (span.style.color = selectedColor));
      }
    });

    enforceColorInputRules(colortext1);
  }

  if (colorPicker2 && colortext2 && colorBox2) {
    colorPicker2.addEventListener('input', () => {
      const selectedColor = colorPicker2.value;
      colortext2.value = selectedColor;
      colorBox2.style.backgroundColor = selectedColor;
      previewBackground.style.backgroundColor = selectedColor;
      subtitleSpans.forEach((span) => (span.style.backgroundColor = selectedColor));
    });

    colortext2.addEventListener('input', () => {
      const selectedColor = colortext2.value;
      if (/^#[0-9A-F]{6}$/i.test(selectedColor)) {
        colorPicker2.value = selectedColor;
        colorBox2.style.backgroundColor = selectedColor;
        previewBackground.style.backgroundColor = selectedColor;
        subtitleSpans.forEach((span) => (span.style.backgroundColor = selectedColor));
      }
    });

    enforceColorInputRules(colortext2);
  }
};

// Resolution Change Script
export const setupResolutionChange = () => {
  const boxes = document.querySelectorAll('.box');
  const previewBox = document.getElementById('preview-box');
  const videoText = document.getElementById('videoText');
  const previewText = document.getElementById('previewText');
  const tiktokPreview = document.getElementById('tiktokPreview');
  const fontSelect = document.getElementById('font_select');

  const updateFontFunc = (updateValue) => {
    const slider = document.getElementById('mySlider');
    const sliderValue = document.getElementById('SliderValue');
    slider.value = updateValue;
    sliderValue.textContent = slider.value;
    previewText.style.fontSize = `${slider.value * 0.8}px`;
    document.getElementById('font_size').value = slider.value * 2;
    document.getElementById('recommended-font-size').textContent = `(Recommended Font Size: ${updateValue})`;

    const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #864AF9 0%, #864AF9 ${value}%, #D9D9D9 ${value}%, #D9D9D9 100%)`;
  };

  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      const resolution = box.getAttribute('data-resolution');

      if (resolution === '1:1') {
        previewBox.style.width = '600px';
        previewBox.style.height = '600px';
        videoText.style.fontSize = '48px';
        previewText.style.width = '350px';
        updateFontFunc('22');
      } else if (resolution === '4:5') {
        previewBox.style.width = '480px';
        previewBox.style.height = '600px';
        videoText.style.fontSize = '42px';
        previewText.style.width = '350px';
        updateFontFunc('22');
      } else if (resolution === '16:9') {
        previewBox.style.width = '680px';
        previewBox.style.height = '382px';
        videoText.style.fontSize = '38px';
        previewText.style.width = '350px';
        updateFontFunc('22');
      } else if (resolution === '9:16') {
        previewBox.style.width = '382px';
        previewBox.style.height = '680px';
        previewText.style.width = '300px';
        updateFontFunc('16');
        previewText.style.fontSize = '18px';
      }

      if (resolution === '9:16') {
        tiktokPreview.style.display = 'flex';
        previewBox.style.background = `url("https://vlsmlsaker.s3.amazonaws.com/assets/background/tiktok.png") center/cover no-repeat`;
        fontSelect.value = 'tiktokfont';
      } else {
        tiktokPreview.style.display = 'none';
        previewBox.style.background = '#EEEEEE';
      }
    });
  });
};

// Form Validation Script
export const setupFormValidation = () => {
  const submitButton = document.getElementById('submit_form');
  const apiKeyInput = document.getElementById('api_key');
  const voiceIdInput = document.getElementById('voice_id');
  const apiKeyError = document.getElementById('api_key_error');
  const voiceIdError = document.getElementById('voice_id_error');
  const fontSelect = document.getElementById('font_select');
  const fontError = document.getElementById('font_error');

  const validateAPIKey = (event) => {
    event.preventDefault();

    const apiKey = apiKeyInput.value.trim();
    const voiceId = voiceIdInput.value.trim();
    const font = fontSelect.value;

    apiKeyError.textContent = '';
    voiceIdError.textContent = '';
    fontError.textContent = '';

    if (!apiKey) {
      apiKeyInput.focus();
      apiKeyError.textContent = 'API key is required.';
      return;
    }

    if (!voiceId) {
      voiceIdInput.focus();
      voiceIdError.textContent = 'Voice ID is required.';
      return;
    }

    if (!font) {
      fontSelect.focus();
      fontError.textContent = 'Please select a font.';
      return;
    }

    // Submit the form if validation passes
    document.getElementById('text_form').submit();
  };

  if (submitButton) {
    submitButton.addEventListener('click', validateAPIKey);
  }
};