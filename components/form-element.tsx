import { FormPayload } from "@/types/sanity";
import { useState } from "react";
import CtaButton from "./CtaButton";

interface FormProps {
  form: FormPayload;
}

export default function Form({ form }: FormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {form.formTitle && (
        <h3 className="text-black text-2xl font-black uppercase italic tracking-tighter mb-8">
          {form.formTitle}
        </h3>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {form?.formFields?.map((field) => (
          <div key={field._key} className="space-y-2 text-black">
            <label className="text-[10px] font-black uppercase tracking-widest ml-1">
              {field.name}
            </label>

            {field.type === "textarea" ? (
              <textarea
                required={field.required}
                placeholder={`Ej. ${field.label}`}
                className="w-full bg-black/5 border-b-2 border-black/20 focus:border-black outline-none p-3 font-bold placeholder-black/30 transition-colors min-h-25 resize-y"
              />
            ) : (
              <input
                type={field.type || "text"}
                required={field.required}
                placeholder={`Ej. ${field.label}`}
                className="w-full bg-black/5 border-b-2 border-black/20 focus:border-black outline-none p-3 font-bold placeholder-black/30 transition-colors"
              />
            )}
          </div>
        ))}

        <CtaButton cta={form.formCta!} className="font-bold py-6" size="lg" />
      </form>
    </div>
  );
}
