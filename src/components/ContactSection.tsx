
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        <p className="section-subtitle max-w-2xl mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out through the form below or directly via email.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-portfolio-purple hover:bg-portfolio-darkPurple text-white flex items-center gap-2"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-portfolio-darkPurple">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-portfolio-lightPurple p-3 rounded-full">
                  <Mail className="w-5 h-5 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <a href="mailto:hello@example.com" className="text-portfolio-purple hover:underline">
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-portfolio-lightPurple p-3 rounded-full">
                  <Phone className="w-5 h-5 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-700">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-portfolio-lightPurple p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-700">New York, United States</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {["github", "linkedin", "twitter", "instagram"].map((social) => (
                  <a 
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-portfolio-lightPurple hover:bg-portfolio-purple/20 p-3 rounded-full transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Icon would go here */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
