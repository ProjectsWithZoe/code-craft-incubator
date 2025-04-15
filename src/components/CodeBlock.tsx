
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { highlightCode } from '@/lib/codeHighlight';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);
  const preRef = useRef<HTMLPreElement>(null);
  
  const handleCopy = () => {
    if (!navigator.clipboard) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        toast({
          title: 'Code copied to clipboard!',
          duration: 2000,
        });
        
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text:', err);
      }
      document.body.removeChild(textArea);
      return;
    }
    
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      toast({
        title: 'Code copied to clipboard!',
        duration: 2000,
      });
      
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  const highlightedCode = highlightCode(code, language);
  
  return (
    <div className="relative group mt-4 mb-6">
      <pre 
        ref={preRef}
        className={cn(
          "p-4 rounded-lg bg-code-background text-code-foreground overflow-x-auto",
          "border border-muted"
        )}
      >
        <code 
          dangerouslySetInnerHTML={{ __html: highlightedCode }} 
          className="block text-sm"
        />
      </pre>
      <Button 
        variant="outline" 
        size="sm" 
        className="absolute top-2 right-2 opacity-50 hover:opacity-100"
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-1" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </>
        )}
      </Button>
    </div>
  );
};

export default CodeBlock;
