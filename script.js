document.addEventListener('DOMContentLoaded', function() {
    const promptInput = document.getElementById('promptInput');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const outputBox = document.getElementById('outputBox');
    const charCount = document.getElementById('charCount');

    promptInput.addEventListener('input', function() {
        charCount.textContent = this.value.length;
    });

    function getMockResponse(prompt) {
        if (prompt.toLowerCase().includes('explain')) {
            return `📚 Here's an explanation based on your request:\n\n"${prompt}"\n\n✅ Great prompt! To make it even better, add: "Explain like I'm 5" or "Use simple analogies".\n\n🔧 Next step: Replace this mock function with actual API call to OpenAI or Google Gemini API.`;
        }
        
        return `🤖 As an AI, I received your prompt:\n\n"${prompt.substring(0, 200)}${prompt.length > 200 ? '...' : ''}"\n\n💡 Prompt Engineering Tip: For better results, try:\n- Adding "Act as an expert in [field]"\n- Using few-shot examples\n- Breaking complex tasks into steps\n\nThis is a demo response. Connect to OpenAI/Gemini API for real AI responses!`;
    }

    submitBtn.addEventListener('click', function() {
        const prompt = promptInput.value.trim();
        
        if (!prompt) {
            outputBox.innerHTML = '⚠️ Please enter a prompt first!';
            outputBox.style.border = '2px solid #ff6b6b';
            copyBtn.style.display = 'none';
            return;
        }
        
        outputBox.style.border = '2px solid #e9ecef';
        outputBox.innerHTML = '🔄 Generating response...';
        
        setTimeout(() => {
            const response = getMockResponse(prompt);
            outputBox.innerHTML = response;
            copyBtn.style.display = 'block';
        }, 1000);
    });

    clearBtn.addEventListener('click', function() {
        promptInput.value = '';
        outputBox.innerHTML = 'Your response will appear here...';
        charCount.textContent = '0';
        copyBtn.style.display = 'none';
        outputBox.style.border = '2px solid #e9ecef';
    });

    copyBtn.addEventListener('click', function() {
        const text = outputBox.innerText;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✅ Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });
});
